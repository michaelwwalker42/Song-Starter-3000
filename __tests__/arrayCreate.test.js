const { createArray } = require('../utils/helpers');


test('createArray() returns an array', () => {
  const string = 'a,b, c, d';
  const progressionArray = createArray(string);
  expect(progressionArray).toEqual([a, b, c, d]);
//   expect(chords).toEqual(expect.arrayContaining(newProgression));  
});