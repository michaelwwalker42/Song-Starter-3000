const editSection = document.querySelector('section');
const deleteButton = document.querySelector('.progression-delete');

async function deleteHandler (id) {
    console.log(id);
    const response = await fetch (`api/favorite/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }) 
    
    if(response.ok) {
        location.reload('/favorites');
    } else {
        alert(response.statusText)
    } 
    
}

editSection.addEventListener('click', event => {
    if (event.target.matches('.progression-delete')) {
        const id =event.target.id;
        deleteHandler(id)      
    };
});