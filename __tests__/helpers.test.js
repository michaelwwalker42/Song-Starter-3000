const { randomProgression, randomScale } = require('../utils/helpers');


test('randomProgression() returns a shuffled array with a given length', () => {
  const chords = ['Am','Bm7b5','C','Dm','Em','F','G'];
  const newProgression = randomProgression(chords,3);
  expect(newProgression).toHaveLength(3);
  expect(chords).toEqual(expect.arrayContaining(newProgression));  
});

test('randomScale() returns a random scale', () => {
  const scales = ['A Minor', 'C Major', 'G Major', 'D Minor'];
  const newScale = randomScale(scales);
  expect(scales).toContain(newScale);  
});



