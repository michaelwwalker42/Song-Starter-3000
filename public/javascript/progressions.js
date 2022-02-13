const numberSelect = document.querySelector('.select-number');
const keySelect = document.querySelector('.select-key');
const keySharpSelect = document.querySelector('.select-keysharp');
const classSelect = document.querySelector('.select-class');


let chordNumber, key, keySharp, keyClass;

// grab the info from the dropdown boxes
const numberValue= (e) => {
    chordNumber = e.target.value;
}
const keyValue= (e) => {
    key = e.target.value;
}
const keySharpValue= (e) => {
    keySharp = e.target.value;
}
const classValue= (e) => {
    keyClass = e.target.value;
}
// function to get chords from a major scale
function getMajorChords(key) {
    // this function will take an argument of a major key
  // and return an array of the chords of that key
  
  // example:
  // getMajorChords("C") will return
  // Cmaj7,Dm7,Em7,Fmaj7,G7,Am7,Bm7b5
  const chords = Tonal.Key.majorKey(`${key}`).chords;
  console.log("Major chords:  " + chords);
  return chords;
}
// function to get chords from a minor scale
function getMinorChords(key) {
  // this function will take an argument of a minor key
  // and return an array of the chords of that key

  // example: 
  // getMinorChords("C") will return
  // Cm7,Dm7b5,Ebmaj7,Fm7,Gm7,Abmaj7,Bb7

  const chords = Tonal.Key.minorKey(`${key}`).natural.chords;
  console.log("Minor chords:  " + chords);
  return chords;
}

// TODO fetch request to get all chords for scale selected
//need to decide if it's going to be from api or model in our db

// async function getChords() {
//   if(!key || !chordNumber) {
//     alert('Please choose a key and number of chords')
//     return;
//   } else {
//     //TODO formate scale to fetch from external api
//     const response = await fetch(`expertnal api`, {
      
//     });
  
//     if (response.ok) {
//       //function to display chords;
//       // TODO get returned data and assign to chrodsarray
//       randomProgression(chordsArray, chordNumber);

//     } else {
//       alert(response.statusText);
//     }
//   }   
// }


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
  const shuffledChords = chordsArray.sort(() => 0.5 - Math.random());
  // slice the array between index[0] and how long the progression should be
  newProgression = shuffledChords.slice(0, chordNumber);
  return displayProgression(newProgression, chordNumber);
};


// function to display chords
const displayProgression= (chords, chordNumber) => {
  const progressionDisplay = document.querySelector('#display');
  // remove hidden attribute and add display attribute
  progressionDisplay.classList.remove("hidden");

  // select colum display div
   const chordColumns = document.querySelector('#chord-columns');
   //how wide the columns need to be based on number of chords to display
   const columnsize = Math.floor(8/chordNumber);
    chordColumns.innerHTML = '';
   
   //generate chord column and value
   chords.forEach(chord => {
      const chordDiv = document.createElement('div')
      chordDiv.classList=`column center is-${columnsize}`;
      chordDiv.innerHTML=chord
      chordColumns.appendChild(chordDiv);
   });

}

// TODO create modal to ask for a name to give the saved progressio
const generateTitle = () => {
  
}

async function saveChords() {
  
  const response = await fetch('/api/favorite', {
      method: 'POST',
      body: {
          newProgression,
          title
      },
      headers: {
          'Content-Type': 'application/json'
        }
  });

  if (response.ok) {
      document.location.reload('/progressions');
  } else {
      alert(response.statusText);
  }
}

// event listeners
numberSelect.addEventListener('change', numberValue);
keySelect.addEventListener('change', keyValue);
keySharpSelect.addEventListener('change', keySharpValue);
classSelect.addEventListener('change', classValue);
document.querySelector('#random-btn').addEventListener('click', ()=> {
    randomProgression(testchords, chordNumber);
});
document.querySelector('#save-btn').addEventListener('click', generateTitle);