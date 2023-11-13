let audioPlayer1 = document.getElementById("audioPlayer1");
let audioPlayer2 = document.getElementById("audioPlayer2");

audioPlayer1.volume = 0.07;
audioPlayer2.volume = 0;


let partyModeSwitch = document.getElementById("partyModeSwitch");

partyModeSwitch.addEventListener("change", function () {
    if (partyModeSwitch.checked) {

        /*armageddon*/
        audioPlayer1.volume = 0;  
        audioPlayer2.volume = 0.07;

    } else {
        /*420*/
        audioPlayer1.volume = 0.07;
        audioPlayer2.volume = 0;
          }
});
