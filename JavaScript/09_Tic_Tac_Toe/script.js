let boxes = document.querySelectorAll(".box");

let reset = document.querySelector(".reset");


let winnerPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
];


let message = document.querySelector(".player-message");


let count = 0;
let symbol = "";
let text = "Player 1 Turn";

message.innerText = text;


reset.addEventListener("click", () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }

    message.innerText = "Player 1 Turn";
    count = 0;

});




for (let box of boxes) {

    box.addEventListener("click", ()=>{
        count++;


        if(count % 2 == 0) {
            symbol = "O";
            text = "Player 1 Turn"
        } else {
            symbol = "X";
            text = "Player 2 Turn";
        }
        box.innerText = symbol;
        box.disabled = true;
        message.innerText = text;

        if (checkWinner()) {
            if (count % 2 == 0) {
                message.innerText = "Player 2 Win";
            } else {
                message.innerText = "Player 1 Win";
            }
            
            disabelBox();
        } 
    });
}


const checkWinner = () => {

    let check = false;
    for (let pattern of winnerPattern) {

        // console.log(pattern[0], pattern[1], pattern[2]);
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != "") {
            if(val1 == val2 && val2 == val3) {
                check = true;
            }
        }
    }

    return check;
}


const disabelBox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

