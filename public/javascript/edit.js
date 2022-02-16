async function saveButtonHandler() {
    const title = document.querySelector('#name-edit').value;
    const progression = document.querySelector('#chord-edit').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    const response = await fetch(`/api/favorite/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          progression,
          title
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
          location.replace('/favorites')
      } else {
        alert(response.statusText);
      }
};

document.querySelector('#save-btn').addEventListener('click', saveButtonHandler);