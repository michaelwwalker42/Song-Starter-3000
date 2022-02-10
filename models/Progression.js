// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

class Progression extends Model { }

Progression.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    progression_name: {
      type: DataTypes.STRING,
      chords: DataTypes.STRING
    },
    scale_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'scale',
        key: 'id'
      }
    }
  }
);

module.exports = Progression;