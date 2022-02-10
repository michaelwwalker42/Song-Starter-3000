const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Major',
  },
  {
    category_name: 'Minor',
  }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;