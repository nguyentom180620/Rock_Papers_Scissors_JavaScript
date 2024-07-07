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
            throw "Invalid choice";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    console.log("Tie! You both chose rock");
                    break;
                case "paper":
                    console.log("You lose! Your opponent chose paper");
                    computerScore++;
                    break;
                case "scissors":
                    console.log("You win! Your opponent chose scissors");
                    humanScore++;
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    console.log("You win! Your opponent chose rock");
                    humanScore++;
                    break;
                case "paper":
                    console.log("Tie! You both chose paper");
                    break;
                case "scissors":
                    console.log("You lose! Your opponent chose scissors");
                    computerScore++;
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    console.log("You lose! Your opponent chose rock");
                    computerScore++;
                    break;
                case "paper":
                    console.log("You win! Your opponent chose paper");
                    humanScore++;
                    break;
                case "scissors":
                    console.log("Tie! You both chose scissors");
                    break;
            }
            break;
        default:
            console.log("Uh-oh, we shouldn't be here D:");
            break;
    }
}

function playGame() {
    let numberOfRounds = 5;
    for (let i = 0; i < numberOfRounds; i++) {
        let humanSelection;
        try {
            humanSelection = getHumanChoice();
        }
        catch (err) {
            console.log("Invalid choice, please try again.");
            i--;
            continue;
        }
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        console.log(`Your Score: ${humanScore}\nComputer Score: ${computerScore}\n`);
    }
    console.log("\n");
    if (humanScore === computerScore) {
        // Since tie rounds do not reset (this game is not best of 5, but rather just 5 rounds), this is very much possible
        console.log("Woah! You guys tied!");
    }
    else if (humanScore > computerScore) {
        console.log("You win!");
    }
    else {
        console.log("You lose!");
    }
}

playGame();