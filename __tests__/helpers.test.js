const randomProgression = require('../utils/helpers');

test('randomProgression() returns a shuffled array with a given length', () => {
  const chords = ['Am','Bm7b5','C','Dm','Em','F','G'];
  const newProgression = randomProgression(chords,3);
  expect(newProgression).toHaveLength(3);
  expect(chords).toEqual(expect.arrayContaining(newProgression));  
});


