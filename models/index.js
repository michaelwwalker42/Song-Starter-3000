const Category = require('./Category');
const Key = require('./Key');
const Scale = require('./Scale');
const User = require('./User');

// create associations

Category.hasMany(Key, {
  foreignKey: 'key_id'
});

Key.hasMany(Scale, {
  foreignKey: 'scale_id'
});

module.exports = { Category, Key, Scale, User }
