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
 var fps = document.getElementById("fps");
 var startTime = Date.now();
 var frame = 0;
 
 function tick() {
   var time = Date.now();
   frame++;
   if (time - startTime > 1000) {
       fps.innerHTML = (frame / ((time - startTime) / 1000)).toFixed(1);
       startTime = time;
       frame = 0;
   }
   window.requestAnimationFrame(tick);
 }
 tick();