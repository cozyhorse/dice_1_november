// dice skapa ett tärnings spel
// stegen

const dice1 = document.querySelector("header article:nth-child(1)")
const dice2 = document.querySelector("header article:nth-child(2)")
const dice3 = document.querySelector("header article:nth-child(3)")
const dice4 = document.querySelector("header article:nth-child(4)")
const dice5 = document.querySelector("header article:nth-child(5)")
const dice6 = document.querySelector("header article:nth-child(6)")
console.log(dice6);


const dices = [1,2,3,4,5,6]

const rollDice = () => {
    return dices[Math.floor(Math.random() * dices.length)]
}

console.log(rollDice());

const button = document.querySelector("button");
let counter = 0

button.addEventListener("click", () => {
    counter++
    console.log(counter);
  
})

