//420現代のコンピュー
let chill = document.getElementById("audioPlayer1");

//armageddon
let thrill = document.getElementById("audioPlayer2");

let nightMode = document.getElementById("switch3-radio1");
let pauseMode = document.getElementById("switch3-radio2");
let dayMode = document.getElementById("switch3-radio3");

//button container
let container = document.getElementsByClassName("switch3-container");


dayMode.addEventListener("change", function () {
    chill.play();
    thrill.play();
       
    if (this.checked) {
        //armageddon plays
        chill.volume = 0;  
        thrill.volume = 0.07;
        container[0].style.animationDuration = '0.1s';
    }
});


pauseMode.addEventListener("change", function () {

    if (this.checked) {

        //no audio
        chill.volume = 0;  
        thrill.volume = 0;
        container[0].style.animationDuration = '0s';
    } 
});


nightMode.addEventListener("change", function () {
    chill.play();
    thrill.play();
       
   if (this.checked) {
        //420現代のコンピュー plays
        chill.volume = 0.07;
        thrill.volume = 0;

        container[0].style.animationDuration = '2s';
          }
});