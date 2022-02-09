const seedUsers = require('./user-seeds');
const seedCategories = require('./category-seeds');
const seedKeys = require('./key-seeds');
const seedScales = require('./scale-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');

  await seedUsers();
  console.log('--------------');

  await seedCategories();
  console.log('--------------');
  
  await seedKeys();
  console.log('--------------');

  await seedScales();
  console.log('--------------');
  
  process.exit(0);
};

seedAll();
