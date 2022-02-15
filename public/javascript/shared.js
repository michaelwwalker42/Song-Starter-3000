// function to randomly generate a chord progression
 var randomProgression = function(chordsArray, chordNumber) {
    // this function will take 2 arguments,
    // the first is the array of chords we want to randomize,
    // the second argument is an integer
    // for how long we want the new progression to be
  
    // example:
    // let chords = ['Am','Bmb75','C','Dm','Em','F','G'];
    // randomProgression(chords, 3);
    // should return something like ['Am','C','F'];
  
    // randomly sort the array
    shuffledChords = chordsArray.sort(() => 0.5 - Math.random());
    // slice the array between index[0] and how long the progression should be
    shuffledChords = shuffledChords.slice(0, chordNumber);
    newProgression = shuffledChords
    console.log(newProgression + ' ' + chordNumber)
    // return displayProgression(newProgression);
  };

  module.exports = randomProgression;
