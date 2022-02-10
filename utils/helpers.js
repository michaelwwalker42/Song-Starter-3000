// function to randomly generate a chord progression
function randomProgression(chordsArray, progressionLength) {
  // this function will take 2 arguments,
  // the first is the array of chords we want to randomize,
  // the second argument is an integer
  // for how long we want the new progression to be

  // example:
  // let chords = ['Am','Bmb75','C','Dm','Em','F','G'];
  // randomProgression(chords, 3);
  // should return something like ['Am','C','F'];

  // randomly sort the array
  const shuffledChords = chordsArray.sort(() => 0.5 - Math.random());
  // slice the array between index[0] and how long the progression should be
  const newProgression = shuffledChords.slice(0, progressionLength);
  // this is an unnecessarily styled console log ;)
  console.log(
    '%cNew Chord Progression: ' + `%c${newProgression}`,
    'font-weight: bold', 'color:blue'
  );
  return newProgression;
};




function randomScale(scales) {
  // this function will take an array of scales and return a random scale
  const scale = scales[(Math.floor(Math.random() * scales.length))];
  console.log(
    '%cRandom Scale: ' + `%c${scale}`,
    'font-weight: bold', 'color:blue'
  );
  return scale;
};


module.exports = { randomProgression, randomScale };




