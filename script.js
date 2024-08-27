// Computer Choice Functions
function getRandomInt(max) {
    let randomInt = Math.floor(Math.random() * max);
    return randomInt;
}

function getComputerChoice() {
    // Calling above helper function, returns either 0, 1, or 2
    let randomNumber = getRandomInt(3);
    let computerChoice = (randomNumber === 0) ? "rock":
    (randomNumber === 1) ? "paper": "scissors";
    return computerChoice;
}

// Human Choice Functions
function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    switch (humanChoice.toLowerCase()) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            // practice in error handling
            return "Invalid choice";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    return "Tie! You both chose rock";
                case "paper":
                    computerScore++;
                    return "You lose! Your opponent chose paper";
                case "scissors":
                    humanScore++;
                    return "You win! Your opponent chose scissors";
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    humanScore++;
                    return "You win! Your opponent chose rock";
                case "paper":
                    return "Tie! You both chose paper";
                case "scissors":
                    computerScore++;
                    return "You lose! Your opponent chose scissors";
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    computerScore++;
                    return "You lose! Your opponent chose rock";
                case "paper":
                    humanScore++;
                    return "You win! Your opponent chose paper";
                case "scissors":
                    return "Tie! You both chose scissors";
            }
            break;
        default:
            return "Uh-oh, we shouldn't be here D:";
    }
}

function playGame() {
    let humanSelection;
    humanSelection = getHumanChoice();
    while (humanSelection === "Invalid choice") {
        console.log("Invalid choice, please try again.");
        humanSelection = getHumanChoice();
    }
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    // console.log(`Your Score: ${humanScore}\nComputer Score: ${computerScore}\n`);
    // console.log('\n');
    // if (humanScore === computerScore) {
    //     // Since tie rounds do not reset (this game is not best of 5, but rather just 5 rounds), this is very much possible
    //     console.log("Woah! You guys tied!");
    // }
    // else if (humanScore > computerScore) {
    //     console.log("You win!");
    // }
    // else {
    //     console.log("You lose!");
    // }
}

// Div DOM for results and game state reporting to user
const playerResult = document.querySelector("#player-results");
const computerResult = document.querySelector("#computer-results");
const activityBox = document.querySelector("#activity");
activityBox.textContent = "Game Activity goes here!";

// Buttons for each selection
// const rock = document.querySelector("#rock");
// rock.addEventListener("click", () => {
//     const computerSelection = getComputerChoice();
//     playRound("rock", computerSelection);
//     console.log(`Your Score: ${humanScore}\nComputer Score: ${computerScore}\n`);
//     result.textContent = "Your Score: " +  humanScore;
// });

// const paper = document.querySelector("#paper");
// paper.addEventListener("click", () => {
//     const computerSelection = getComputerChoice();
//     playRound("paper", computerSelection);
//     console.log(`Your Score: ${humanScore}\nComputer Score: ${computerScore}\n`);
//     result.textContent = "Your Score: " +  humanScore;
// });

// const scissors = document.querySelector("#scissors");
// scissors.addEventListener("click", () => {
//     const computerSelection = getComputerChoice();
//     playRound("scissors", computerSelection);
//     console.log(`Your Score: ${humanScore}\nComputer Score: ${computerScore}\n`);
//     result.textContent = "Your Score: " +  humanScore;
// });

// Start Button

const startButton = document.querySelector("#start-game");
started = false;
startButton.addEventListener("click", () => {
    started = true;
    humanScore = 0;
    computerScore = 0;
    playerResult.textContent = "Your Score: " +  humanScore;
    computerResult.textContent = "Computer Score: " + computerScore;
    activityBox.textContent = "Game Activity goes here!";
});

// Here is the buttons again, this time in a for loop for ease

const buttons = document.querySelector(".buttons");
buttons.childNodes.forEach(element => {
    element.addEventListener("click", () => {
        if (started) {
            if (!(humanScore === 5 || computerScore === 5)) {
                const humanChoice = element.textContent.toLowerCase();
                const computerSelection = getComputerChoice();
                activityBox.textContent = playRound(humanChoice, computerSelection);
                playerResult.textContent = "Your Score: " +  humanScore;
                computerResult.textContent = "Computer Score: " + computerScore;
                if (humanScore === 5 || computerScore === 5) {
                    if (humanScore > computerScore) {
                        activityBox.textContent = "You win!";
                    }
                    else {
                        activityBox.textContent = "You lose!";
                    }
                }
            }
        }
    })
});