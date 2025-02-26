document.addEventListener('DOMContentLoaded', () => {
  const textInput = document.getElementById('text_input');
  const hiddenInput = document.querySelector('.password.hidden');
  const handle = document.querySelector('.handle');
  const correctPassword = "Credits"; // Replace with the actual correct password

  handle.addEventListener('click', () => {
    if (textInput.type === 'text') {
      textInput.type = 'password';
      hiddenInput.type = 'text';
    } else {
      textInput.type = 'text';
      hiddenInput.type = 'password';
    }
  });

  textInput.addEventListener('input', () => {
    if (textInput.value === correctPassword) {
      window.location.href = "credits.html"; // Replace with the actual file to navigate to
    }
  });
});

function goToHomePage() {
  window.location.href = "index.html"; // Replace with the actual homepage URL if different
}
const text = document.querySelector('input.password.visible');
const pass = document.querySelector('input.password.hidden');
const handle = document.querySelector('img.handle');

text.addEventListener('input', (e)=>{
  pass.value = e.target.value;
});

let startingPos;
let paneUp = true;
let angle;

handle.addEventListener('mousedown', (e)=>{
  startingPos = e.clientY;
  document.body.classList.add('grabbing');
})

document.addEventListener('mousemove', (e)=>{
  if (startingPos) {
    if (paneUp) {
      if (e.clientY > startingPos && e.clientY < startingPos+160) {
        angle = ((e.clientY-startingPos) * 180) / 160;
        pass.style.transform = `rotateX(${angle}deg)`;
        handle.style.transform = `translateY(-40px) rotateX(${angle}deg)`;
      }
    } else {
      if (e.clientY < startingPos && e.clientY > startingPos-160) {
        angle = 360 + ((e.clientY-startingPos-160) * 180) / 160;
        pass.style.transform = `rotateX(${angle}deg)`;
        handle.style.transform = `translateY(-40px) rotateX(${angle}deg)`;
      }
    }
  }
})

document.addEventListener('mouseup', (e)=>{
  document.body.classList.remove('grabbing');
  if (startingPos) {
    if (angle >= 90) {
      pass.style.transform = `rotateX(180deg)`;
      handle.style.transform = `translateY(-40px) rotateX(180deg)`;
      paneUp = false;
    } else {
      pass.style.transform = `rotateX(0)`;
      handle.style.transform = `translateY(-40px) rotateX(0)`;
      paneUp = true;
    }
  }

  startingPos = undefined;
})