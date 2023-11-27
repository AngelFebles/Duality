//420現代のコンピュー
let chill = document.getElementById("audioPlayer1");
//armageddon
let thrill = document.getElementById("audioPlayer2");

//background video
let backgroundVideo = document.getElementById("backgroundVideo");
let videoSource = document.getElementById("videoSource");

let chillMode = document.getElementById("switch3-radio1");
let pauseMode = document.getElementById("switch3-radio2");
let thrillMode = document.getElementById("switch3-radio3");

//button container with all checks
let container = document.getElementsByClassName("switch3-container");

//rain starter
let mizurain;

//we dont start in any mode
let currentMode = null;


//Rain
let createRaindrop = function(char, color, fallSpeed, currentMode) {
    const raindrop = document.createElement('div');
    raindrop.className = 'raindrop';
    raindrop.textContent = char;
    raindrop.style.animationDuration = fallSpeed;
    raindrop.style.animationName = 'raindrop-fall';
    raindrop.style.color = color;
    raindrop.style.left = Math.random() * window.innerWidth + 'px';

    // Set the rotation animation duration
    const styleSheet = document.styleSheets[0];
    const ruleIndex = styleSheet.cssRules.length;
    const rule = `@keyframes rotate-${ruleIndex} { 0% { transform: rotate(0deg) rotateY(0deg); } 100% { transform: rotate(360deg) rotateY(360deg); } }`;
    styleSheet.insertRule(rule, ruleIndex);
    raindrop.style.animationName += `, rotate-${ruleIndex}`;
    raindrop.style.animationDuration += `, ${generateAnimationDuration(currentMode)}`;

    document.body.appendChild(raindrop);
}

let startRain = function (char,delay,color,fallSpeed,currentMode) {
    mizurain = setInterval(function() {
        createRaindrop(char,color,fallSpeed,currentMode);
    }, delay);
}

let clearRain = function(){
    const boxes = document.querySelectorAll('.raindrop');

        boxes.forEach(box => {
        box.remove();
        });
        } 

let generateAnimationDuration = function (currentMode) {
  let duration;

  if (currentMode === 'day') {
    //between 1 and 10
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    duration = `${randomNumber}s`;
  } else if (currentMode === 'night') {
    //between 10 and 20
    const randomNumber = Math.floor(Math.random() * 11) + 10;
    duration = `${randomNumber}s`;
  } else {
    duration = '1s'; // Default duration if mode is not recognized
  }

  return duration;
}




//Event Listeners for Buttons

thrillMode.addEventListener("change", function () {
    if (this.checked) {
        // if the current mode is night, clear its interval
        if (currentMode === "night") {
            clearInterval(mizurain);
            clearRain();
        }

        currentMode = "day"; // Set the current mode to day
        chill.pause();
        thrill.play();

        // armageddon plays
        chill.volume = 0;
        thrill.volume = 0.07;

        // fast pump
        container[0].style.animationDuration = '0.25s';

        // start rain
        startRain('戦', 100, 'red', '2s',currentMode);


        //change background video to armyLoop
        videoSource.setAttribute('src' , './media/mp4/armyLoop.mov');
        backgroundVideo.load();
        backgroundVideo.play();
    }
});

chillMode.addEventListener("change", function () {
    if (this.checked) {
        // if current mode is day, clear its interval
        if (currentMode === "day") {
            clearInterval(mizurain);
            clearRain();
        }

        currentMode = "night"; // Set the current mode to night
        chill.play();
        thrill.pause();

        // 420現代のコンピュー plays
        chill.volume = 0.07;
        thrill.volume = 0;

        // slow pump
        container[0].style.animationDuration = '1.5s';

        // start rain
        startRain('平', 500, '#006EFF', '60s',currentMode);

        //vaporwave background video
        videoSource.setAttribute('src' , './media/mp4/vaporwave.mp4');
        backgroundVideo.load();
        backgroundVideo.play();
    }
});

pauseMode.addEventListener("change", function () {
    if (this.checked) {
        // stop audio
        thrill.pause();
        chill.pause();

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

        //reset background video source to blank
        videoSource.setAttribute('src' , '');
        backgroundVideo.load();
    }
});




