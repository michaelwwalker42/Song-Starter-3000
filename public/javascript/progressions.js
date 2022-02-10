const numberSelect = document.querySelector('.select-number');
const keySelect = document.querySelector('.select-key');
const keySharpSelect = document.querySelector('.select-keysharp');
const classSelect = document.querySelector('.select-class');
const{ randomProgression } = require('./randomize');

let chordNumber, key, keySharp, keyClass;
// grab the info from the dropdown boxes
const numberValue= (e) => {
    chordNumber = e.target.value;
    console.log(chordNumber)
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

async function getChords(key, number) {
    const response = await fetch(`/api/music`, {
        method: 'GET',
        body: JSON.stringify({
          key,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
        //function to display chords;
        randomProgression(chords);

      } else {
        alert(response.statusText);
      }
    
}

//random progression function
randomProgression = (chords, chordNumber) => {

}

// function to display chords
const displayProgression= (chords) => {

}
// event listeners
numberSelect.addEventListener('change', numberValue);
keySelect.addEventListener('change', keyValue);
keySharpSelect.addEventListener('change', keySharpValue);
classSelect.addEventListener('change', classValue);
document.querySelector('#random-btn').addEventListener('click', ()=> {
    console.log('random button clicked this will evnetually go to fetch');
})