//420現代のコンピュー
let chill = document.getElementById("audioPlayer1");

//armageddon
let thrill = document.getElementById("audioPlayer2");

let nightMode = document.getElementById("switch3-radio1");
let pauseMode = document.getElementById("switch3-radio2");
let dayMode = document.getElementById("switch3-radio3");

//button container
let container = document.getElementsByClassName("switch3-container");

//rain starter
let mizurain;

let currentMode = null;

//Rain
let createRaindrop = function(char,color,fallSpeed) {
    const raindrop = document.createElement('div');
    raindrop.className = 'raindrop';
    raindrop.textContent = char;
    raindrop.style.animationDuration = fallSpeed;
    raindrop.style.color = color;
    raindrop.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(raindrop);
  }

let startRain = function (char,delay,color,fallSpeed) {
    mizurain = setInterval(function() {
        createRaindrop(char,color,fallSpeed);
    }, delay);
}

let clearRain = function(){
    const boxes = document.querySelectorAll('.raindrop');

        boxes.forEach(box => {
        box.remove();
        });
        } 





//Event Listeners for Buttons

dayMode.addEventListener("change", function () {
    if (this.checked) {
        // if the current mode is night, clear its interval
        if (currentMode === "night") {
            clearInterval(mizurain);
            clearRain();
        }

        currentMode = "day"; // Set the current mode to day
        chill.play();
        thrill.play();

        // armageddon plays
        chill.volume = 0;
        thrill.volume = 0.07;

        // fast pump
        container[0].style.animationDuration = '0.1s';

        // start rain
        startRain('石', 100, 'red', '5s');
    }
});

nightMode.addEventListener("change", function () {
    if (this.checked) {
        // if current mode is day, clear its interval
        if (currentMode === "day") {
            clearInterval(mizurain);
            clearRain();
        }

        currentMode = "night"; // Set the current mode to night
        chill.play();
        thrill.play();

        // 420現代のコンピュー plays
        chill.volume = 0.07;
        thrill.volume = 0;

        // slow pump
        container[0].style.animationDuration = '1s';

        // start rain
        startRain('水', 500, '#006EFF', '60s');
    }
});

pauseMode.addEventListener("change", function () {
    if (this.checked) {
        // stop audio
        chill.volume = 0;
        thrill.volume = 0;

        // stop pump
        container[0].style.animationDuration = '0s';

        // stop rain
        clearInterval(mizurain);

        // remove rain divs
        clearRain();
        
        // reset the current mode
        currentMode = null; 
    }
});

