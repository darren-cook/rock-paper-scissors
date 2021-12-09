const rockBtn = document.querySelector("#Rock");
const paperBtn = document.querySelector("#Paper");
const scissorsBtn = document.querySelector("#Scissors");
const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");
const userScore = document.querySelector("#userScore");
const compScore = document.querySelector("#compScore");
const result = document.querySelector("#result");
const gameContainer = document.querySelector("#gameContainer");
const gameTitle = document.querySelector(".gameTitle");
const gameFlex = document.querySelector("#gameFlex");
const winner = document.querySelector("#winner");
const buttons = document.querySelector(".buttons");


let uScore = 0;
let cScore = 0;
let round = 0;




startBtn.addEventListener("click", function(){
    startGame()
})


function startGame(){
    startBtn.style.display = "none";
    gameContainer.style.display = "flex";
}

function game(playerSelection) {
    playRound(computerSelection(), playerSelection);
    if ((uScore >= 5) || (cScore >= 5)) {
        stopGame()
    }
}

function stopGame() {
    gameFlex.innerText = "Try again?"
    buttons.style.display = "none";
    resetBtn.style.display = "flex";
    if (uScore > cScore) {
        winner.innerText = "You won - "
    } else {
        winner.innerText = "You lost - "
    }
}

resetBtn.addEventListener("click", function(){
    resetGame();
})

function resetGame() {
    uScore = 0;
    cScore = 0;
    round = 0;
    userScore.textContent = uScore;
    compScore.textContent = cScore;
    gameContainer.style.display = "flex";
    resetBtn.style.display = "none";
    gameFlex.innerText = "Choose Wisely"
    winner.innerText = ""
    buttons.style.display = "flex";
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
}

rockBtn.addEventListener("click", function(){
    let playerSelection = "Rock";
    game(playerSelection);
})

paperBtn.addEventListener("click", function(){
    let playerSelection = "Paper";
    game(playerSelection);
})

scissorsBtn.addEventListener("click", function(){
    let playerSelection = "Scissors";
    game(playerSelection);
})

function computerSelection() {
    let key = Math.floor(Math.random() * 3);
    let ansKey = ["Rock", "Paper", "Scissors"];
    return(ansKey[key]);

}

function playRound(computerSelection, userSelection) {
    switch (computerSelection + " " + userSelection) {
        case "Rock Rock":
        case "Paper Paper":
        case "Scissors Scissors":
            gameTie(computerSelection, userSelection);
            break;
        case "Rock Scissors":
        case "Paper Rock":
        case "Scissors Paper":
            gameLose(computerSelection, userSelection);
            break;
        case "Rock Paper":
        case "Paper Scissors":
        case "Scissors Rock":
            gameWin(computerSelection, userSelection);
            break;
    }
}

function gameTie(computerSelection, userSelection){
    round ++;
    const pResult = document.createElement("p");
    pResult.innerText = `Round ${round} - It is a tie! Both players selected ${computerSelection}.`
    result.appendChild(pResult);
}

function gameLose(computerSelection, userSelection){
    round ++;
    cScore ++;
    compScore.textContent = cScore;
    const pResult = document.createElement("p");
    pResult.innerText = `Round ${round} - You lost! ${computerSelection} beats your ${userSelection}.`
    result.appendChild(pResult);
}

function gameWin(computerSelection, userSelection){
    round ++;
    uScore ++;
    userScore.textContent = uScore;
    const pResult = document.createElement("p");
    pResult.innerText = `Round ${round} - You won! ${userSelection} beats their ${computerSelection}.`
    result.appendChild(pResult);
}


// function main() {
//     rockBtn.addEventListener("click", function(){
//         playRound(computerPlay(), "Rock");
//     })

//     paperBtn.addEventListener("click", function(){
//         playRound(computerPlay(), "Paper");
//     })

//     scissorsBtn.addEventListener("click", function(){
//         playRound(computerPlay(), "Scissors");
//     })
// }

// function computerPlay() {
//     let computerNum = Math.floor(Math.random() * 3);
//     let computerAns
//     if (computerNum == 0) {
//         computerAns = 'Rock';
//         return(computerAns)
//     }   else if (computerNum == 1) {
//         computerAns = 'Paper';
//         return(computerAns)
//     }   else {
//         computerAns = 'Scissors';
//         return(computerAns)
//     }
// }



// function game() {
//     let numGames = 5;
//     let winner
//     for (let i = 0; i < numGames; i++) {
//         let result = playRound(computerPlay(), userPlay());
//         console.log(result)
//         let check = result.slice(0, 5)
//         if (check == "You w") {
//             userScore++
//         }   else if (check == "You l") {
//             compScore++
//         } 
//         console.log(`User: ${userScore} vs. Computer: ${compScore}`)
//     }
//     if (userScore == compScore) {
//         winner = "tie";
//         console.log("There is no winner! It is a tie!");
//     }   else if (userScore > compScore) {
//         winner = "User";
//     }   else {
//         winner = "Computer";
//     }
//     if (winner == "User" || winner == "Computer") {
//         console.log(`The winner is ${winner}!`)
//     }
// }


// function userPlay() {
//     let userAns;
//     while (!(userAns == "Rock" || userAns == "Paper" || userAns == "Scissors")) {
//         userAns = prompt("Rock, Paper, or Scissors?");
//         userAns = (userAns[0].toUpperCase() + userAns.slice(1).toLowerCase())
//     }
//     return (userAns);
//     }



