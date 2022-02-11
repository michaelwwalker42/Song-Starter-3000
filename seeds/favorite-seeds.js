const { Progression } = require('../models');


const progressionData = [
    {
      progression_name: 'cool chords',
      chords: ['a', 'b', 'e'],
      user_id: 2
    },
    {
      progression_name: 'cool chords2',
      chords: ['b', 'b', 'd'],
      user_id: 2
    },
    {
      progression_name: 'cool chords3',
      chords: ['b', 'b', 'd'],
      user_id: 2
    },
    {
      progression_name: 'cool chords5',
      chords: ['a', 'g', 'd'],
      user_id: 2
    },
    {
      progression_name: 'cool chords7',
      chords: ['a', 'b', 'f'],
      user_id: 1
    },
  ];

  const seedProgressions = () => Progression.bulkCreate(progressionData);

module.exports = seedProgressions;
