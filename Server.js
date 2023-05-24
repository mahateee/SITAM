const express = require('express');
const app = express();
const port = 3000;
const Asset = require('./modules/TableAsset');
const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/Asset/add', async (req, res) => {
  try {
    const { Assets, ID, SerialNumber, Model , Brand,Category,Os,Description,Status,date } = req.body;
    const newAsset = await Asset.create({ Assets, AssetID: ID, SerialNumber ,Model,Brand,Category,Os,Description, Status,date });
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
    // const { Assets, ID, SerialNumber, Model , Brand,Category,Os,Description,Status,date } = req.body;
    // const newAsset = await Asset.update({ Assets, AssetID: ID, SerialNumber ,Model,Brand,Category,Os,Description, Status,date });
  
  Asset.update(
    // Values to update
    {
      Assets:  req.body.Assets,
      ID:  req.body.ID,
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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});