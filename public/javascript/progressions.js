const numberSelect = document.querySelector('.select-number');
const keySelect = document.querySelector('.select-key');
const keySharpSelect = document.querySelector('.select-keysharp');
const classSelect = document.querySelector('.select-class');
const { Key } = window.Tonal; 
import {randomProgression , displayProgression} from '/javascript/shared.js';

let chordNumber, key, keySharp, keyClass, chords, newProgression;


// grab the info from the dropdown boxes
const numberValue = (e) => {
  chordNumber = e.target.value;
}
const keyValue = (e) => {
  key = e.target.value;
}
const keySharpValue = (e) => {
  keySharp = e.target.value;
}
const classValue = (e) => {
  keyClass = e.target.value;
}
// function to get chords from a major scale
function getMajorChords(key) {
  // this function will take an argument of a major key
  // and return an array of the chords of that key

  // example:
  // getMajorChords("C") will return
  // Cmaj7,Dm7,Em7,Fmaj7,G7,Am7,Bm7b5
   chords = Key.majorKey(`${key}`).chords;
  // return randomProgression(chords, chordNumber);
}
// function to get chords from a minor scale
function getMinorChords(key) {
  // this function will take an argument of a minor key
  // and return an array of the chords of that key

  // example: 
  // getMinorChords("C") will return
  // Cm7,Dm7b5,Ebmaj7,Fm7,Gm7,Abmaj7,Bb7

  chords = Key.minorKey(`${key}`).natural.chords;
  // return randomProgression(chords, chordNumber);
}

// modal viewing
const modal = document.querySelector('.modal');

const generateTitle = () => {
  modal.classList.add('is-active');
}


const closeModal = () => {
  let title = document.querySelector('#progression-title').value.trim();
  modal.classList.remove('is-active');
  saveChords(title)
}

async function saveChords(title) {
  // turn newprogression into a string to save to progressions
  let saveChords = newProgression.join(", ");
  console.log(typeof(saveChords))
  const response = await fetch('/api/favorite', {
    method: 'POST',
    body: JSON.stringify({
      saveChords,
      title
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    location.reload('/progressions');
  } else {
    alert(response.statusText);
  }
}


// event listeners for dropdown menus
numberSelect.addEventListener('change', numberValue);
keySelect.addEventListener('change', keyValue);
keySharpSelect.addEventListener('change', keySharpValue);
classSelect.addEventListener('change', classValue);

// click event for generating random chord progression
document.querySelector('#random-btn').addEventListener('click', () => {
  if (!chordNumber || !keyValue || !keyClass) {
    alert('You must select a chord number, key and class');
    return;
  } else {
    let newkey;
    if (!keySharp) {
      newkey = key;
    } else {
      newkey = key + keySharp;
    }
    if (keyClass === 'major') {
      console.log(newkey)
      getMajorChords(newkey);
      newProgression = randomProgression(chords, chordNumber);
      displayProgression(newProgression, chordNumber);
    } else {
      getMinorChords(newkey);
      newProgression = randomProgression(chords, chordNumber);
      displayProgression(newProgression, chordNumber);
    }
  }

});
// click event for save button
document.querySelector('#save-btn').addEventListener('click', generateTitle);


//add keyup event to modal

document.querySelector('#progression-title').addEventListener('keyup', (event) => {
  if(event.code === 'Enter'){
    closeModal();
  }
});

// Add a click event on various child elements to close the parent modal
(document.querySelectorAll('.modal-background, .modal-close, .modal-card-head') || []).forEach((item) => {
  item.addEventListener('click', () => {
    closeModal();
  });
});
