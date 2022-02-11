const { User } = require('../models');

const userData = [
  {
    username: 'Mike',
    email:'mike@fakemail.com',
    password:'password123'
  },
  {
    username: 'Elle',
    email:'elle@fakemail.com',
    password:'password123'
  }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;