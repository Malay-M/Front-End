//Loops: Loops are used to execute a piece code again & again.


for (let i = 1; i <= 5; i++) {
    console.log("Hello world");
}


console.log("Loop has ended");

//Calculate sum of 1 to n numbers

let sum = 0;
let n = 5;
for(let i = 1; i <= n; i++) {
    sum = sum + i;
}

console.log("Sum =", sum);

for(var i = 1; i <= n; i++) {
    console.log("i =", i);
}

console.log(i);

//Infinte Loop: A Loop that never ends

// for (let i = 0; i >= 0; i++) {
//     console.log("i =", i);
// }


//While Loop

i = 1;
while(i <= 5) {
    console.log("i =", i);
    i++;
}


//do-while Loop
i = 20;

do {
    console.log("i = ", i);
    i++;
}while(i <= 10);


i = 1;
do {
    console.log("i =", i);
    i++;
} while(i <= 5);


// for-of Loop(String, Arrays)
let str = "JavaScript";

let length = 0;
for (let i of str) {
    console.log("i =", i);
    length++;
}

console.log("String length =", length);


// for-in Loop(objects)

let student = {
    name : "Maly",
    age : "21",
    cgpa : 7.5,
    isPass : true
};

for (let key in student) {
    console.log("Key =", key, "Value =", student[key]);
}
