const Category = require('./Category');
const Scale = require('./Scale');
const User = require('./User');
const Progression = require('./Progression');

// create associations
User.hasMany(Progression, {
  foreignKey: 'progression_id'
});

Progression.belongsTo(User, {
  foreignKey: 'user_id'
});

Category.hasMany(Scale, {
  foreignKey: 'scale_id'
});

module.exports = { Category, Scale, User, Progression }
