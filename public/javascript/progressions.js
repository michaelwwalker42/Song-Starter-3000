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



// fetch request to get all chords for scale selected
//need to decide if it's going to be from api or model in our db

async function getChords() {
  if(!key || !chordNumber) {
    alert('Please choose a key and number of chords')
    return;
  } else {
    const newKey = key + keySharp + keyClass;
    const response = await fetch(`/api/music`, {
      method: 'GET',
      body: JSON.stringify({
        newKey,
        chordNumber
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      //function to display chords;
      randomProgression(chordsArray, chordNumber);

    } else {
      alert(response.statusText);
    }
  }
   
    
}

// might need the fetch request to render a partial handlebars in the genterate page that will display the chords and will take the random progression function from the helpers. send the key and length in the body of the get request

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
  const newProgression = shuffledChords.slice(0, chordNumber);
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
   
   //generate chord column and value
   chords.forEach(chord => {
      const chordDiv = document.createElement('div')
      chordDiv.classList=`column center is-${columnsize}`;
      chordDiv.innerHTML=chord
      chordColumns.appendChild(chordDiv);
   });


}

chordNumber = 4;
testchords = ['a', 'b', 'c', 'd', 'e'];

// event listeners
numberSelect.addEventListener('change', numberValue);
keySelect.addEventListener('change', keyValue);
keySharpSelect.addEventListener('change', keySharpValue);
classSelect.addEventListener('change', classValue);
document.querySelector('#random-btn').addEventListener('click', ()=> {
    randomProgression(testchords, chordNumber);
});