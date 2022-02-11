const Category = require('./Category');
const Scale = require('./Scale');
const User = require('./User');
const Progression = require('./Progression');

// create associations
User.hasMany(Progression, {
  foreignKey: 'user_id',
  onDelete:'CASCADE'
});

Progression.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});



module.exports = { Category, Scale, User, Progression }
