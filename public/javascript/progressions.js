const numberSelect = document.querySelector('.select-number');
const keySelect = document.querySelector('.select-key');
const keySharpSelect = document.querySelector('.select-keysharp');
const classSelect = document.querySelector('.select-class');
const { Key } = window.Tonal;

let chordNumber, key, keySharp, keyClass;

const majKeySigs = ['C', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#'];
const minKeySigs = ['A', 'E', 'B', 'F#', 'C#', 'G#', 'D#', 'A#', 'D', 'G', 'C', 'F', 'Bb', 'Eb', 'Ab'];
const randomMajKey = majKeySigs[(Math.floor(Math.random() * majKeySigs.length))];
const randomMinKey = minKeySigs[(Math.floor(Math.random() * minKeySigs.length))];

function completelyRandomProgression() {
  // random length between 2-4
  const randomLength = Math.max((Math.ceil(Math.random() * 4)), 2);
  if (Math.random() > 0.5) {
    let key = randomMajKey;
    console.log(`Key: ${key} major`);
    const chords = Key.majorKey(key).chords;
    console.log(`Chords: ${chords}`);
    randomProgression(chords, randomLength);
  } else {
    let key = randomMinKey;
    console.log(`Key: ${key} minor`);
    const chords = Key.minorKey(key).natural.chords;
    console.log(`Chords: ${chords}`);
    randomProgression(chords, randomLength);
  }
};



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
async function getMajorChords(key) {
  // this function will take an argument of a major key
  // and return an array of the chords of that key

  // example:
  // getMajorChords("C") will return
  // Cmaj7,Dm7,Em7,Fmaj7,G7,Am7,Bm7b5
  const chords = Key.majorKey(`${key}`).chords;
  return randomProgression(chords, chordNumber);
}
// function to get chords from a minor scale
function getMinorChords(key) {
  // this function will take an argument of a minor key
  // and return an array of the chords of that key

  // example: 
  // getMinorChords("C") will return
  // Cm7,Dm7b5,Ebmaj7,Fm7,Gm7,Abmaj7,Bb7

  const chords = Key.minorKey(`${key}`).natural.chords;
  return randomProgression(chords, chordNumber);
}

//global variable for random chord progression
let newProgression;

// function to randomly generate a chord progression
function randomProgression(chordsArray, chordNumber) {
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
  return displayProgression(newProgression);
};


// function to display chords
const displayProgression = (chords) => {

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

// modal viewing
const modal = document.querySelector('.modal');

const generateTitle = () => {
  modal.classList.add('is-active');
}

const closeModal = (target) => {
  title = document.querySelector('#progression-title').value.trim();
  modal.classList.remove('is-active');
  saveChords(title)
}

async function saveChords(title) {
  const response = await fetch('/api/favorite', {
    method: 'POST',
    body: JSON.stringify({
      newProgression,
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

// event listeners
numberSelect.addEventListener('change', numberValue);
keySelect.addEventListener('change', keyValue);
keySharpSelect.addEventListener('change', keySharpValue);
classSelect.addEventListener('change', classValue);
document.querySelector('#random-btn').addEventListener('click', () => {
  if (!chordNumber || !keyValue || !keyClass) {
    alert('You must select a chord number, key and class');
    return;
  } else {
    if (!keySharp) {
      newkey = key;
    } else {
      newkey = key + keySharp;
    }
    if (keyClass === 'major') {
      getMajorChords(newkey);
    } else {
      getMinorChords(newkey);
    }
  }

});
document.querySelector('#save-btn').addEventListener('click', generateTitle);
// Add a click event on various child elements to close the parent modal
(document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach((close) => {
  const target = close.closest('.modal');

  close.addEventListener('click', () => {
    closeModal(target);
  });
});