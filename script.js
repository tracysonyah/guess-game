const containerEle = document.querySelector(".container");
const guessContainer = document.querySelector(".guess-container");
const h1Text = document.querySelector("h1");
const numberArea = document.querySelector(".number p");
const guessInput = document.getElementById("guessInput");
const guessButton = document.querySelector(".button button");
const messageText = document.querySelector(".message");
const chancesLeft = document.querySelector(".chance-left");


let randomNum;
let chances = 5;
// console.log(chances - 1);

function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
randomNum = generateRandom(1, 10);
console.log(randomNum);


function guessIt() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess)) {
        messageText.innerText = "Please enter a valid number...";
        console.log(".meee")
    }

    if (userGuess === randomNum) {
        messageText.innerText = `Congratulations! You guessed it right. The correct answer was ${randomNum}`;
        guessButton.diabled = true;
        guessInput.disabled = true;
        console.log("Ahmad!");
    }
    else {
        chances --;
        if (chances === 0) {
            chancesLeft.innerText = `Game Over! You have ${chances} chance, The correct number was ${randomNum}`;
            guessButton.diabled = true;
            guessInput.disabled = true;
            console.log("yes!");
        }
        else {
            if (userGuess > randomNum) {
                messageText.innerText = "Whoops! Too high, try again";
                console.log("him!");
            }
            if (userGuess < randomNum) {
                messageText.innerText = "Ohh, yhh no. Too low, try again.";
                console.log("her!");
            }
        }
    }
}

guessButton.addEventListener("click", () => {
    guessIt();
});


