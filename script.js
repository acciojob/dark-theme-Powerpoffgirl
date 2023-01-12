//your code here

const btn = document.getElementById("swap");
const app = document.getElementById("app");

btn.addEventListener("click", changeColor);

function changeColor() {
  if (app.style.backgroundColor == "black") {
    app.style.backgroundColor = "white";
  } else {
    app.style.backgroundColor = "black";
  }
}
