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