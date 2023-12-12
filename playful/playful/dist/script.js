const d =  document.querySelector('div');

setTimeout(() => {
 d.classList.add('loaded');
}, 500);

document.body.addEventListener('click', () => {
  d.classList.toggle('loaded');
});