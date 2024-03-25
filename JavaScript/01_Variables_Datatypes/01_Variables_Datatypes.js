// console.log("Hello world");
// console.log("Welcome to JavaScript");


//variables

// fullName = "Tony Stark";
// age = 21;
// price = 99.99;
// x = null;
// y = undefined;
// isFollow = true;

// _fullName = "Tony Stark";
// $fullName = "Tony Stark";



// console.log(fullName);
// console.log(age);
// console.log(price);
// console.log(x);
// console.log(y);
// console.log(isFollow);




//var: Variable can be re-declared but can be updated. A global scope variable.
var Name = "Tony Stark";

console.log(Name);


//let : Variable cannot be re-declared but can be updated. A block scope variable.
let fullName = "Tony Stark";
// let price = 1000;

console.log(fullName);




//const: Variable cannot be re-declared or update. A block scope variable.
const PI = 3.14;
console.log(PI);


//blocks
{
    let a = 5;
    console.log(a);
}

{
    let a = 10;
    console.log(a);
}


//Data types
//Primitive data types(Numbers, String, Boolean, Undefined, Null, BigInt, Symbal)

let age = 24;
let price = 100.5;
let name = "Tony Stark";
let isFollow = true;
let x;
let y = null;
let a = BigInt("12345");
let b = Symbol("hello");


console.log(typeof(age))
console.log(typeof(price))
console.log(typeof(name))
console.log(typeof(isFollow))
console.log(typeof(x))
console.log(typeof(y))
console.log(typeof(a))
console.log(typeof(b))



//Non-Primitive data types(objects, Array, Functions)
//objects: collection of values(name(String), age(number), marks(numbers), isPass(Boolean))
// key : value

const student = {
    fullName : "Tony Stark",
    age : 26,
    cgpa : 8.2,
    isPass : true
};

student.age = student.age + 1;

console.log(student)
console.log(typeof(student))
console.log(student["fullName"])
console.log(student.fullName)
console.log(student.age)


