if (localStorage.getItem("player") == null) {
  location.href = "/"
}
const totalPoints = +localStorage.getItem("totalpoints");
const highscore = +localStorage.getItem("highscore");

const total = document.querySelector("#totalpoints");
const hscore = document.querySelector("#highscore");
const playAgain = document.querySelector("#playAgain");
const changeName = document.querySelector("#changeName");

total.textContent = totalPoints;
hscore.textContent = highscore;

playAgain.addEventListener("click", () => {
  location.href = "/start.html"
});

changeName.addEventListener("click", () => {
  localStorage.removeItem("player");
  location.href = "/"
});
