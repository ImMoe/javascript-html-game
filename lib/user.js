const name = document.querySelector("#name");
const difficulty = document.querySelector("#difficulty");
const button = document.querySelector(".btn");

name.addEventListener("keypress", () => {
  button.className =
    "btn btn-success animated infinite heartBeat delay-1s slow";
});

button.addEventListener("click", e => {
  e.preventDefault();
  let user = {
    name: name.value,
    difficulty: difficulty.value
  };
  localStorage.setItem("player", JSON.stringify(user));
  location.href = "/start.html"
});
