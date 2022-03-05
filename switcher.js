const buttons = document.querySelectorAll('.color-picker');
const body = document.querySelector('body');

buttons.forEach((button) =>{
  button.addEventListener('click', (event) =>{
    body.style.backgroundColor = event.target.id;
  });
});