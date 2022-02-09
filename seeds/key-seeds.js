const { Key } = require('../models');

const keyData = [
  // id: 1
  {
    key_name: 'C',
    category_id: '1'
  },
  // id: 2
  {
    key_name: 'G',
    category_id: '1'
  },
  // id: 3
  {
    // id: 1
    key_name: 'D',
    category_id: '1'
  },
  // id: 4
  {
    key_name: 'A',
    category_id: '1'
  },
  // id: 5
  {
    key_name: 'E',
    category_id: '1'
  },
  // id: 6
  {
    key_name: 'B',
    category_id: '1'
  },
  // id: 7
  {
    key_name: 'F#',
    category_id: '1'
  },
  // id: 8
  {
    key_name: 'C#',
    category_id: '1'
  },
  // id: 9
  {
    key_name: 'F',
    category_id: '1'
  },
  // id: 10
  {
    key_name: 'Bb',
    category_id: '1'
  },
  // id: 11
  {
    key_name: 'Eb',
    category_id: '1'
  },
  // id: 12
  {
    key_name: 'Ab',
    category_id: '1'
  },
  // id: 13
  {
    key_name: 'Db',
    category_id: '1'
  },
  // id: 14
  {
    key_name: 'Gb',
    category_id: '1'
  },
  // id: 15
  {
    key_name: 'Cb',
    category_id: '1'
  },
  // id: 16
  {
    key_name: 'A',
    category_id: '2'
  },
  // id: 17
  {
    key_name: 'E',
    category_id: '2'
  },
  // id: 18
  {
    key_name: 'B',
    category_id: '2'
  },
  // id: 19
  {
    key_name: 'F#',
    category_id: '2'
  },
  // id: 20
  {
    key_name: 'C#',
    category_id: '2'
  },
  // id: 21
  {
    key_name: 'G#',
    category_id: '2'
  },
  // id: 22
  {
    key_name: 'D#',
    category_id: '2'
  },
  // id: 23
  {
    key_name: 'A#',
    category_id: '2'
  },
  // id: 24
  {
    key_name: 'D',
    category_id: '2'
  },
  // id: 25
  {
    key_name: 'G',
    category_id: '2'
  },
  // id: 26
  {
    key_name: 'C',
    category_id: '2'
  },
  // id: 27
  {
    key_name: 'F',
    category_id: '2'
  },
  // id: 28
  {
    key_name: 'Bb',
    category_id: '2'
  },
  // id: 29
  {
    key_name: 'Eb',
    category_id: '2'
  },
  // id: 30
  {
    key_name: 'Ab',
    category_id: '2'
  }
];

const seedKeys = () => Key.bulkCreate(keyData);

module.exports = seedKeys;