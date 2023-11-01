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

const button = document.querySelector("button");
const bigDice = document.querySelector("#dice");

function initGame() {
  let goalNumber = 1;
  let rolledDice = "";
  let counter = 0;
  let rolled = [];
  button.addEventListener("click", () => {
    let roll = rollDice();
    console.log(roll);

    if (roll === goalNumber) {
      let smallDice = document.querySelector(`header .dots-${goalNumber}`);
      smallDice.classList.remove("faded");
      goalNumber = goalNumber + 1;
    }

    bigDice.classList.remove(`dots-${rolledDice}`);
    bigDice.classList.add(`dots-${roll}`);
    rolledDice = roll;

    counter++;
    console.log(rolled);
    button.textContent = `Kasta (${counter})`;

    if(goalNumber > 6) {
        button.textContent = `Du klarade det på ${counter} kast!`;
        button.disabled = true;

      }
  });



}

initGame();
