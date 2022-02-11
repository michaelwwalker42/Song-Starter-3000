const seedUsers = require('./user-seeds');
const seedCategories = require('./category-seeds');
const seedScales = require('./scale-seeds');
const seedProgressions = require('./favorite-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');

  await seedUsers();
  console.log('--------------');

  await seedCategories();
  console.log('--------------');

  await seedScales();
  console.log('--------------');

  await seedProgressions();
  console.log('--------------');
  
  process.exit(0);
};

seedAll();
