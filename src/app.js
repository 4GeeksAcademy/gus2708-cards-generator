let icons = ["♦", "♥", "♠", "♣"];
let colors = ["red", "black"];

let iconsContainer = document.querySelectorAll('p.icon');
let numberContainer = document.getElementById('number');
let changeButton = document.getElementById("changeButton");

const selectType = (number) => {
  switch (number) {
    case 11: return "J";
    case 12: return "Q";
    case 13: return "K";
    case 14: return "A";
    default: return number;
  }
};

const randomizeCard = () => {
  // number
  let newNumber = Math.floor(Math.random() * 13) + 2; // 2–14
  let numberResult = newNumber > 10 ? selectType(newNumber) : newNumber;
  numberContainer.textContent = numberResult;

  // icon
  let iconSelected = icons[Math.floor(Math.random() * icons.length)];

  // color
  let colorSelected = colors[Math.floor(Math.random() * colors.length)];

  iconsContainer.forEach(iconEl => {
    iconEl.textContent = iconSelected;
    iconEl.classList.remove("red", "black");
    iconEl.classList.add(colorSelected);
  });

};

window.onload = randomizeCard;

changeButton.onclick = randomizeCard;