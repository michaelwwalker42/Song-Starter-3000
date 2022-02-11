// create modal to ask for a name to give the saved progression
// save as title

async function saveChords() {

    const chordsArray 
    // function to loop over all divs under progression box and select values and add to chrods array
    
    const response = await fetch('/api/favorite', {
        method: 'POST',
        body: {
            chordsArray,
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

document.querySelector('#save-btn').addEventListener('click', saveChords);