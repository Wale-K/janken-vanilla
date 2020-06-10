let userScore = 0;
let cpuScore = 0;
const choices = ["rock", "paper", "scissors"];
const drawText = "It's a draw.";
const resetMessage = "Click on an image to begin the game.";

const rock = () => {

    // generate computer selection

    const cpuSelection = choices[Math.floor(Math.random() * choices.length)];


    // process the user selection comapred to the CPU selection
    // if CPU selection is scissors, display victory p for rock. User score + 1
    if (cpuSelection === "scissors") {
        const victoryText = "You win! Rock crushes scissors!";
        document.getElementById("message").innerHTML = victoryText;
        userScore += 1;
        document.getElementById("user-score").innerHTML = userScore;
        
        // else if CPU selection is paper, display loss p for rock. CPU + 1
    } else if (cpuSelection === "paper") {
        const defeatText = "You lose! Rock is wrapped by paper!";
        document.getElementById("message").innerHTML = defeatText;
        cpuScore += 1;
        document.getElementById("cpu-score").innerHTML = cpuScore;
    }
    // else CPU selection is rock, display draw p.
    else {

        document.getElementById("message").innerHTML = drawText;
    }
}

const paper = () => {
    const cpuSelection = choices[Math.floor(Math.random() * choices.length)];
    if (cpuSelection === "rock") {
        const victoryText = "You win! Paper wraps rock!";
        document.getElementById("message").innerHTML = victoryText;
        userScore += 1;
        document.getElementById("user-score").innerHTML = userScore;
    } else if (cpuSelection === "scissors") {
        const defeatText = "You lose! Paper is cut by scissors!";
        document.getElementById("message").innerHTML = defeatText;
        cpuScore += 1;
        document.getElementById("cpu-score").innerHTML = cpuScore;
    } else {
        document.getElementById("message").innerHTML = drawText;
    }
}

const scissors = () => {
    const cpuSelection = choices[Math.floor(Math.random() * choices.length)];
    if (cpuSelection === "paper") {
        const victoryText = "You win! Scissors cuts paper!";
        document.getElementById("message").innerHTML = victoryText;
        userScore += 1;
        document.getElementById("user-score").innerHTML = userScore;
    } else if (cpuSelection === "rock") {
        const defeatText = "You lose! Scissors is crushed by rock!";
        document.getElementById("message").innerHTML = defeatText;
        cpuScore += 1;
        document.getElementById("cpu-score").innerHTML = cpuScore;
    } else {
        document.getElementById("message").innerHTML = drawText;
    }
}

const reset = () => {
    userScore = 0;
    cpuScore = 0;
    document.getElementById("user-score").innerHTML = userScore;
    document.getElementById("cpu-score").innerHTML = cpuScore;
    document.getElementById("message").innerHTML = resetMessage;
}