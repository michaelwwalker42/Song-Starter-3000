async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
      const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({
              email,
              password
          }),
          headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        document.location.replace('/progressions');
      } else if (response.status === 401) {
        dispalyError();
      }
  } else {
    const errordiv = document.querySelector('#error-div');
    errordiv.textContent = 'Please enter both email and password'
  }
};

const modal = document.querySelector(".modal");

function dispalyError() {
  modal.classList.add('is-active');
  setTimeout(()=> {modal.classList.remove('is-active')}, 1800);
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

// exit error modal on enter
// document.querySelector('#error-popup').addEventListener('keyup', (event) => {
//   if(event.code === 'Enter'){
//     closeModal();
//   }
// });

// // Add a click event on various child elements to close the parent modal
// (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head') || []).forEach((item) => {
//   item.addEventListener('click', () => {
//     closeModal();
//   });
// });