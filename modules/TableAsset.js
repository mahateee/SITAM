const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

const Asset = sequelize.define('Asset', {
  Assets: {
    type: DataTypes.STRING,
    allowNull: false
  },
  AssetID: { 
    type: DataTypes.STRING,
    allowNull: false
  },
  SerialNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Os: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
});

sequelize.sync()
  .then(() => {
    console.log('Asset table created successfully');
  })
  .catch((error) => {
    console.error('Error syncing Asset table:', error);
  });

module.exports = Asset;