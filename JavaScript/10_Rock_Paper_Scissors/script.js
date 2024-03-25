let choices = document.querySelectorAll(".choice");

let message = document.querySelector("#msg");

let userScore = document.querySelector("#user-score");

let compScore = document.querySelector("#computer-score");

let compWin = 0, userWin = 0;
let userChoice, compChoice;

const randomChoice = () => {
    let choice = "";
    let randNum = Math.floor(Math.random() * 3);

    if(randNum === 0) {
        choice = "rock";
    } else if (randNum == 1) {
        choice = "paper"
    } else if (randNum == 2) {
        choice = "scissor";
    }

    return choice;
}






const gameplay = (userChoice) => {
    compChoice = randomChoice();
    console.log(compChoice);
    console.log(userChoice);

    if (userChoice == compChoice) {
        message.innerText = `Match Drow. You: ${userChoice} Computer: ${compChoice}`;
        message.style.backgroundColor = "#081b31";
    } else {
        if (userChoice == "rock") {
            if (compChoice == "paper") {
                winner(false);
            } else {
                winner(true);
            }
        } else if (userChoice == "paper") {
            if (compChoice == "rock") {
                winner(true);
            } else {
                winner(false);
            }
        } else if (userChoice == "scissor") {
            if (compChoice == "rock") {
                winner(false);
            } else {
                winner(true);
            }
        }
    }
};


const winner = (win) => {

    if(win) {
        message.innerText = `You Win. You: ${userChoice} Computer: ${compChoice}`;
        userWin++;
        userScore.innerText = userWin;
        message.style.backgroundColor = "green";
    } else {
        message.innerText = `Compter Win. You: ${userChoice} Computer: ${compChoice}`;
        compWin++;
        compScore.innerText = compWin;
        message.style.backgroundColor = "red";
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        userChoice = choice.getAttribute("id");
        
        gameplay(userChoice);
    })
});