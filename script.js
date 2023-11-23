let chill = document.getElementById("audioPlayer1");
let thrill = document.getElementById("audioPlayer2");

chill.volume = 0.07;
thrill.volume = 0;


let nightMode = document.getElementById("switch3-radio1");
let pauseMode = document.getElementById("switch3-radio2");
let dayMode = document.getElementById("switch3-radio3");


dayMode.addEventListener("change", function () {
    chill.play();
    thrill.play();
       
    if (this.checked) {
        /*armageddon*/
        chill.volume = 0;  
        thrill.volume = 0.07;

    }
});


pauseMode.addEventListener("change", function () {

    if (this.checked) {

        /*no audio*/
        chill.volume = 0;  
        thrill.volume = 0;

    } 
});


nightMode.addEventListener("change", function () {
    chill.play();
    thrill.play();
       
   if (this.checked) {
        /*420*/
        chill.volume = 0.07;
        thrill.volume = 0;
          }
});