const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

const signUpForm = document.getElementById("signUpForm");
const signInForm = document.getElementById("signInFrom");

fetch('http://localhost:8000/user/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  mode: 'cors',
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => {
  console.error('Error:', error);
});