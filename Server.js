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

app.post('/Asset', async (req, res) => {
  try {
    const { Assets, ID, Type, SerialNumber, Model , Brand,Category,Os,Description,date } = req.body;
    const newAsset = await Asset.create({ Assets, AssetID: ID, Type, SerialNumber ,Model,Brand,Category,Os,Description, date });
    res.json(newAsset);
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