let chill = document.getElementById("audioPlayer1");
let thrill = document.getElementById("audioPlayer2");

chill.volume = 0.07;
thrill.volume = 0;


let ModeSwitch = document.getElementById("ModeSwitch");

ModeSwitch.addEventListener("change", function () {
    chill.play();
    thrill.play();
       
    if (ModeSwitch.checked) {

        /*armageddon*/
        chill.volume = 0;  
        thrill.volume = 0.07;

    } else {
        /*420*/
        chill.volume = 0.07;
        thrill.volume = 0;
          }
});
