function Hello() {
    alert("Hi will stop adding thin on desember 2 for two weeks and i will add things on november 16");
 }
 
 function EventHandler() {
    alert("to play go to https://wondrous-jalebi-fb1e04.netlify.app/ ");
 }

 function getit() {
alert("fun yesss🎅🏼 you found santa congrats you won")
 }

 function getinoroute(){
   alert("fun-miles1.netlify.app is the new link if you or useing the old link you will not be on the updated version if you are on a githud link you are still geting updates to it")
 }
 function yourmom(){
   alert("your mom still in testing")
 }
 const fpsElem = document.querySelector("#fps");

let then = 0;
function render(now) {
  now *= 0.001;                          // convert to seconds
  const deltaTime = now - then;          // compute time since last frame
  then = now;                            // remember time for next frame
  const fps = 1 / deltaTime;             // compute frames per second
  fpsElem.textContent = fps.toFixed(1);  // update fps display
  
  requestAnimationFrame(render);
}
requestAnimationFrame(render);
