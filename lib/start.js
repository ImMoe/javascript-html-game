if (localStorage.getItem("player") == null) {
  location.origin = "/";
}
const precent = document.querySelector(".loader");
const h3 = document.querySelector("h3");

const user = JSON.parse(localStorage.getItem("player"));

let loaded = 0;
setInterval(() => {
  if (loaded >= 100) {
    h3.textContent = "NU KÖR VI!";
    setTimeout(() => {
      location.origin = "/game.html";
    }, 2000);
    return false;
  }
  loaded += 2;
  h3.textContent = `Laddar.. ${user.name} (${loaded}%)`;
}, 100);
