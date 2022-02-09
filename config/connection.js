// import the Sequelize construcgtor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize('song_starter_3000', 'root', 'dani7392385', {
    dialect: 'mysql',
    port: 3306
  });
}
module.exports = sequelize;