const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const bodyParser = require('body-parser');
const Asset = require('./modules/TableAsset');
const path = require('path');
const User = require('./modules/Resgister');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());


  

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/Asset/add', async (req, res) => {
  try {
    const { Assets, AssetID, SerialNumber, Model , Brand,Category,Os,Description,Status,date } = req.body;
    const newAsset = await Asset.create({ Assets, AssetID: AssetID, SerialNumber ,Model,Brand,Category,Os,Description, Status,date });
    res.json(newAsset);
    console.log(newAsset);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving asset to database');
  }
});



app.get('/Asset', async (req, res) => {
  try {
    const assets = await Asset.findAll();
    res.json(assets);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving assets from database');
  }
});

app.get('/Asset/show/:id', async (req, res) => {
  try {
    const assets = await Asset.findByPk(req.params.id);
    res.json(assets);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving assets from database');
  }
});

app.get('/Asset/edit/:id', async (req, res) => {
  try {
    const assets = await Asset.findByPk(req.params.id);
    res.json(assets);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving assets from database');
  }
});

app.put('/Asset/edit/:id', async (req, res) => {
  try {
    // const assets = await Asset.findByPk(req.params.id);
    // const { Assets, AssetID, SerialNumber, Model , Brand,Category,Os,Description,Status,date } = req.body;
    // const newAsset = await Asset.update({ Assets, AssetID: AssetID, SerialNumber ,Model,Brand,Category,Os,Description, Status,date });
  
  Asset.update(
    // Values to update
    {
      Assets:  req.body.Assets,
      AssetID:  req.body.AssetID,
      SerialNumber:  req.body.SerialNumber,
      Model:  req.body.Model,
      Brand:  req.body.Brand,
      Category:  req.body.Category,
      Os:  req.body.Os,
      Description:  req.body.Description,
      Status:  req.body.Status,
      date:  req.body.date,
    },
    { // Clause
     
        where: 
        {
            id: req.params.id
        }
    }
   

).then(function(rowsUpdated) {
  res.json(rowsUpdated)
})
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving asset to database');
  }
});



app.delete('/Asset/:id', async (req, res) => {
  try {
    const assetToDelete = await Asset.findByPk(req.params.id);
    if (!assetToDelete) {
      return res.status(404).send('Asset not found');
    }
    await assetToDelete.destroy();
    res.send('Asset deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting asset from database');
  }
});

// user part 
app.get('/SignIn', async (req, res) => {
  try {
    const user = await Asset.findAll();
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving assets from database');
  }
});
  User.create({
    name: 'admin',
    email: 'admin@admin.com',
    password: 'admin123'
  })
    .then((user) => {
      console.log('User created:', user.toJSON());
    })
    .catch((error) => {
      console.error('Unable to create user:', error);
    });

    app.post('/SignIn', async (req, res) => {
       const { email, password } = req.body;

  try {
    // Find the user with the provided email in the database
    const user = await User.findOne({ where: { email } });

    // If the user is not found, send a 401 Unauthorized response
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Verify the provided password matches the password in the database
    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // If the passwords match, send a 200 OK response
    return res.status(200).json({ message: 'Signin successful' });
  } catch (error) {
    // If there is an error, send a 500 Internal Server Error response
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.post('/SignUp', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await User.create({ name, email, password });
    res.redirect('/Asset');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
   


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});