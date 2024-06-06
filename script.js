const body = document.querySelector("body");
const randomColors = [
  "blue",
  "red",
  "purple",
  "yellow",
  "green",
  "limegreen",
  "cyan",
];
let sizeBtn;
let numOfBoxes;

function takeUserInput() {
  numOfBoxes = 0;
  while (numOfBoxes <= 0 || numOfBoxes >= 100) {
    numOfBoxes = parseInt(
      prompt("Give the number of boxes per side. Please give a number")
    );
  }
}

function spawnBoxes() {
  body.innerHTML = "<button id='sizeBtn'>Change grid size</button>";
  sizeBtn = document.getElementById("sizeBtn");
  sizeBtn.addEventListener("click", (ev) => {
    console.log("Clicked motherfucker");
    takeUserInput();
    spawnBoxes();
  });
  for (let i = 0; i < numOfBoxes; i++) {
    for (let j = 0; j < numOfBoxes; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      body.appendChild(box);
      box.style.width = `calc(100% / ${numOfBoxes})`;
      box.style.height = `calc(100vw / ${numOfBoxes})`;
      box.addEventListener("mouseenter", (ev) => {
        box.style.backgroundColor =
          randomColors[Math.floor(Math.random() * randomColors.length)];
      });
    }
  }
}

takeUserInput();
spawnBoxes();
