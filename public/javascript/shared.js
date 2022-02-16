// function to randomly generate a chord progression
 export function randomProgression (chords, chordNumber) {
  // this function will take 2 arguments,
    // the first is the array of chords we want to randomize,
    // the second argument is an integer
    // for how long we want the new progression to be
  
    // example:
    // let chords = ['Am','Bmb75','C','Dm','Em','F','G'];
    // randomProgression(chords, 3);
    // should return something like ['Am','C','F'];
  
    // randomly sort the array
    let   shuffledChords = chords.sort(() => 0.5 - Math.random());
    // slice the array between index[0] and how long the progression should be
    shuffledChords = shuffledChords.slice(0, chordNumber);
    return shuffledChords;
 };

  export function displayProgression(chords, chordNumber) {

    const progressionDisplay = document.querySelector('#display');
    // remove hidden attribute and add display attribute
    progressionDisplay.classList.remove("hidden");
  
    // select colum display div
    const chordColumns = document.querySelector('#chord-columns');
    //how wide the columns need to be based on number of chords to display
    const columnsize = Math.floor(8 / chordNumber);
    chordColumns.innerHTML = '';
  
    //generate chord column and value
    chords.forEach(chord => {
      const chordDiv = document.createElement('div')
      chordDiv.classList = `column center is-${columnsize}`;
      chordDiv.innerHTML = chord
      chordColumns.appendChild(chordDiv);
    });
  
  }

