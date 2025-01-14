// dice skapa ett tärnings spel
// stegen

// counter för antal kast, skall visas i kastaknappen
// jämföra kast med ett index
// plocka bort faded-class när rätt nr är slaget
// on click på knappen som har en slumpgenerator Math.floor/math random
// matcha slag med nästa med en if sats
// visa tärningen som slumpats fram i den stora tärningen
// skapa en array med tärningens nummer

let dices = [1, 2, 3, 4, 5, 6];

// funktion som slumpar ett nr, skall kopplas till den stora tärningen och till knappen "kasta"
function rollDice() {
  return dices[Math.floor(Math.random() * dices.length)];
}

const dice1 = document.querySelector("header article:nth-child(1)");
const dice2 = document.querySelector("header article:nth-child(2)");
const dice3 = document.querySelector("header article:nth-child(3)");
const dice4 = document.querySelector("header article:nth-child(4)");
const dice5 = document.querySelector("header article:nth-child(5)");
const dice6 = document.querySelector("header article:nth-child(6)");
const bigDice = document.querySelector("#dice");
const button = document.querySelector("button");

function initGame() {
    let goalNumber = 1;
  let rolledDice = "";
  let counter = 0;
  let rolled = [];
  button.addEventListener("click", () => {
    let roll = rollDice();
    console.log(roll);
    if (roll === 1 && rolled.length === 0) {
      rolled.push(roll);
      dice1.classList.remove("faded");
    }
    if (roll === 2 && rolled.length === 1) {
      rolled.push(roll);
      dice2.classList.remove("faded");
    }
    if (roll === 3 && rolled.length === 2) {
      rolled.push(roll);
      dice3.classList.remove("faded");
    }
    if (roll === 4 && rolled.length === 3) {
      rolled.push(roll);
      dice4.classList.remove("faded");
    }
    if (roll === 5 && rolled.length === 4) {
      rolled.push(roll);
      dice5.classList.remove("faded");
    }
    if (roll === 6 && rolled.length === 5) {
      rolled.push(roll);
      dice6.classList.remove("faded");
    }

    bigDice.classList.remove(`dots-${rolledDice}`);
    bigDice.classList.add(`dots-${roll}`);
    rolledDice = roll;

    counter++;
    console.log(rolled);
    button.textContent = `Kasta (${counter})`;
  });
}

initGame();
