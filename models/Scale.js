// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Scale model (table) by extending off Sequelize's Model class
class Scale extends Model { }

// set up fields and rules for Key model
Scale.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    scale_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: false
    },
    chords: {
      type: DataTypes.STRING,
      allowNull: false
    },
    key_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'key',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'key',
  }
);

module.exports = Scale;