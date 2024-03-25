// Functions: Block of code that performs a specific task, can be invoked whenever needed

//Function defination
function myFunction() {
    console.log("JavaScript");
    console.log("Function");
}

//Function call
// myFunction();
// myFunction();
// myFunction();



function myFunction(msg, n) {  // parameter -> input
    console.log(msg*n);
}

// myFunction("JavaScript", 10);  //argument



function sum(x, y) {
    // console.log(x + y);
    let s = x + y;
    return s;
}
// let value = sum(10, 20);
// console.log(value);



// Arrow functions: Compact way of writing a function

const arrowSum = (a , b) => {
    console.log(a + b);
}
// arrowSum(5, 10);


const arrowMul = (a , b) => {
    console.log(a * b);
}
arrowMul(3, 5);


const printHello = () => {
    console.log("Hello World");
}
printHello();


// forEach Loop in Arrays
// callbackFunction: Here, it is a function to execute for each each element in the array
// A callback is a function passed as an argument to another function.

let arr = [1, 2, 3, 4, 5];

// arr.forEach(function printValue(val) {
//     console.log(val);
// });

arr.forEach((val) => {
    console.log(val);
});

let cities = ["Pune", "Delhi", "Kolkata", "Mumbai"];

//forEach(value, index, array)
cities.forEach((val, index, arr) => {
    console.log(val.toUpperCase(), index, arr);
});  


//Map: Creates a new array with the results of some operation. The value its callbak
//returns are used to form new array.

let nums = [67, 52, 39, 56, 10, 35, 18];

let newArr = nums.map((val) => {
    return val * val;
});

console.log(newArr);


//Filter: Creates a new array of elements that give true for a condition/filter.

let evenArr = nums.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr);


//Reduce: Performs some operations & reduces the array to a single value. It returns that single value.

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];


sum = arr.reduce((prev, curr) => {
    return prev + curr;
});

console.log(sum)


let large = arr.reduce((prev, curr) => {
    if(prev > curr) 
        return prev;
    if(curr > prev)
        return curr;
});

console.log(large);
