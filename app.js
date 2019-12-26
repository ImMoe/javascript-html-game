if (localStorage.getItem("player") == null) {
  location.href = "/";
}
// Game rules
let magicBallPoint, goldenBallPoint, totalPoints, countDown;
magicBallPoint = 2;
goldenBallPoint = 4;
totalPoints = 0;
countDown = 30;

// Game widgets
const magicBall = document.querySelector(".magic_ball");
const goldenBall = document.querySelector(".golden_ball");

// User data
const user = JSON.parse(localStorage.getItem("player"));

// Top bar
const time = document.querySelector(".time");
const points = document.querySelector(".points");
const backgroundMusic = document.querySelector(".backgroundMusic");
const soundOff = document.querySelector("#soundOff");
const soundOn = document.querySelector("#soundOn");

// Manipulating DOM elements
time.textContent = countDown + "s";

// Decreasing audio sound (used to be loud)
backgroundMusic.volume = 0.1;
// Start and stop sound buttons
soundOff.addEventListener("click", () => {
  backgroundMusic.pause();
  backgroundMusic.currentTime = 0;
  backgroundMusic.removeAttribute("autoplay");
});
soundOn.addEventListener("click", () => {
  backgroundMusic.play();
});
// Click sound effect
let btnSound = new Audio("./sounds/click-sound.mp3");
// Adding points when clicking on magicball
magicBall.addEventListener("click", () => {
  btnSound.play();
  btnSound.currentTime = 0;
  totalPoints += magicBallPoint;
  points.textContent = `${totalPoints}p`;
});
// Adding points when clicking on goldenball
goldenBall.addEventListener("click", () => {
  btnSound.play();
  btnSound.currentTime = 0;
  totalPoints += goldenBallPoint;
  points.textContent = `${totalPoints}p`;
});

// Start the time countdown
startTimer();

function startTimer() {
  let gameTimer = setInterval(() => {
    if (countDown == 0) {
      clearInterval(gameTimer);
      localStorage.setItem("totalpoints", String(totalPoints));
      // if there is no highscore add one
      if (localStorage.getItem("highscore") == null) {
        localStorage.setItem("highscore", String(totalPoints));
      }
      // If the points from game is higher than highscore we change it
      if (totalPoints > +localStorage.getItem("highscore")) {
        localStorage.setItem("highscore", totalPoints);
      }
      return (location.href = "/result.html");
    }
    countDown -= 1;
    time.textContent = countDown + "s";
  }, 1000);
}

// Starting the movement
movement(magicBall);
movement(goldenBall);
/**
 *
 * @param ball Element to be moved arround the screen
 */
function movement(ball) {
  const easy = 900;
  const hard = 670;
  setInterval(
    () => {
      let topAndBottom = Math.floor(
        Math.random() * (document.body.clientHeight - 100)
      );
      let rightAndLeft = Math.floor(
        Math.random() * (document.body.clientWidth - 100)
      );
      ball.style.marginTop = `${topAndBottom}px`;
      ball.style.marginLeft = `${rightAndLeft}px`;
      ball.style.marginBottom = `${topAndBottom}px`;
      ball.style.marginRight = `${rightAndLeft}px`;
    },
    user.difficulty.toLowerCase() == "enkelt"
      ? easy
      : user.difficulty.toLowerCase() == "svårt"
      ? hard
      : 1000
  );
}
