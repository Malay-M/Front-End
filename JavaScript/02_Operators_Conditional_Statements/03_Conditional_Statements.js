// Conditional Statements: TO implement some condition in the code

// if statement

let age = 16;

if (age > 18) {
    console.log("You can Vote!!!");
}

if (age < 18) {
    console.log("You cannot Vote!!!")
}

let mode = "dark";
let color;

if (mode === "dark") {
    color = "black";
}

if (mode === "light") {
    color = "white";
}

console.log(color);


//if-else statements

mode = "light";

if (mode === "dark") {
    color = "black";
} else {
    color = "white";
}

console.log(color);


age = 25;

if (age >= 18) {
    console.log("You can vote!!");
} else {
    console.log("You cannot vote!!");
}


//odd-even 
let num = 10;

if (num % 2 === 0) {
    console.log(num, "is even");
} else {
    console.log(num ,"is odd");
}

// else-if statements

mode = "dark";

if (mode === "dark") {
    color = "black";
} else if (mode == "blue") {
    color = "blue";
} else if (mode === "pink") {
    color = "pink";
} else {
    color = "white";
}

console.log(color);

if(mode === "dark") {
    console.log(mode);
}