const { Key } = window.Tonal; 
import {randomProgression , displayProgression} from '/javascript/shared.js';

const majKeySigs = ['C', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#'];
const minKeySigs = ['A', 'E', 'B', 'F#', 'C#', 'G#', 'D#', 'A#', 'D', 'G', 'C', 'F', 'Bb', 'Eb', 'Ab'];
const randomMajKey = majKeySigs[(Math.floor(Math.random() * majKeySigs.length))];
const randomMinKey = minKeySigs[(Math.floor(Math.random() * minKeySigs.length))];

let chordNumber;

// button handler

function completelyRandomProgression() {
  // this function will randomly select a key and create a progression 2-4 chords long
  chordNumber = Math.max((Math.ceil(Math.random() * 4)), 2);
  if (Math.random() > 0.5) {
    let key = randomMajKey;
    let chords = Key.majorKey(`${key}`).chords;
    return chords;
  } else {
    let key = randomMinKey;
    let chords = Key.minorKey(`${key}`).natural.chords;
    return chords;
  }
};

// random button handler
function randmoButtonHandler() {
  let chords = completelyRandomProgression();
  let newProgression = randomProgression(chords, chordNumber);
  displayProgression(newProgression, chordNumber);
}
  
document.querySelector('#main-btn').addEventListener('click', randmoButtonHandler);