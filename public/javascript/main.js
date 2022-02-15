const { Key } = window.Tonal; 

const majKeySigs = ['C', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#'];
const minKeySigs = ['A', 'E', 'B', 'F#', 'C#', 'G#', 'D#', 'A#', 'D', 'G', 'C', 'F', 'Bb', 'Eb', 'Ab'];
const randomMajKey = majKeySigs[(Math.floor(Math.random() * majKeySigs.length))];
const randomMinKey = minKeySigs[(Math.floor(Math.random() * minKeySigs.length))];


function completelyRandomProgression() {
  // this function will randomly select a key and create a progression 2-4 chords long
  let chordNumber = Math.max((Math.ceil(Math.random() * 4)), 2);
  if (Math.random() > 0.5) {
    let key = randomMajKey;
    // console.log(`Key: ${key} major`);
    const chords = Key.majorKey(`${key}`).chords;
    // console.log(`Chords: ${chords}`);
    randomProgression(chords, chordNumber);
  } else {
    let key = randomMinKey;
    // console.log(`Key: ${key} minor`);
    const chords = Key.minorKey(`${key}`).natural.chords;
    // console.log(`Chords: ${chords}`);
    randomProgression(chords, chordNumber);
  }
};

// function to randomly generate a chord progression
function randomProgression(chordsArray, number) {
  
    // randomly sort the array
    shuffledChords = chordsArray.sort(() => 0.5 - Math.random());
    // slice the array between index[0] and how long the progression should be
    shuffledChords = shuffledChords.slice(0, number);
    newProgression = shuffledChords
    return displayProgression(newProgression, number);
  };

  // function to display chords
const displayProgression = (chords, number) => {
    console.log('from display proression, chordsarry=' + chords + ' number ' + number); 


    const progressionDisplay = document.querySelector('#display');
    // remove hidden attribute and add display attribute
    progressionDisplay.classList.remove("hidden");
  
    // select colum display div
    const chordColumns = document.querySelector('#chord-columns');
    //how wide the columns need to be based on number of chords to display
    const columnsize = Math.floor(12 / number);
    chordColumns.innerHTML = '';
  
    //generate chord column and value
    chords.forEach(chord => {
      const chordDiv = document.createElement('div')
      chordDiv.classList = `column center is-${columnsize}`;
      chordDiv.innerHTML = chord
      chordColumns.appendChild(chordDiv);
    });
  
  }
  
  
document.querySelector('#main-btn').addEventListener('click', completelyRandomProgression);