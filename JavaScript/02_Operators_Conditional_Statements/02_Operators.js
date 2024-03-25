//Operators: Used to perform some operation on data.

//Arithmetic Operators
let a = 5;
let b = 2;

console.log("a = ", a, " & b = ", b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);  // Modulus
console.log("a ** b = ", a ** b); // Exponentiation


//Unary Operators

a++; // 6(a = a + 1)
console.log("a++ = ", a);
a--; //4(a = a - 1)
console.log("a-- = ", a);

b = 10;
console.log("++b = ", ++b);
console.log("b++ = ", b++);
console.log("b = ", b);

b = 10;
console.log("--b = ", --b);
console.log("b-- = ", b--);
console.log("b = ", b);


// Assignment Operators
// =  +=  -=  *=  %=  **=

a = 5;
b = 2;


a += 4; // a = a + 4
console.log("a = ", a);

a = 5;
a -= 4; // a = a - 4
console.log("a = ", a);

a = 5;
a *= 4; // a = a * 4
console.log("a = ", a)

a = 5;
a /= 4; // a = a / 4
console.log("a = ", a)

a = 5;
a %= 4; // a = a % 4
console.log("a = ", a)

a = 5;
a **= 4; // a = a ** 4
console.log("a = ", a)



// Comparision Operators
// == (Equal to)   ===(Equal to & type)  !=(Not equal to)  !==(Not equal to & type)
a = 5;
b = 2;

console.log("a == b : ", a == b);
console.log("a != b : ", a != b);

a = 5;  // number
b = "5"; // String
console.log("a == b : ", a == b); //true

console.log("a === b : ", a === b);
console.log("a !== b : ", a !== b);

a = 5;
b = 3;

console.log("a > b : ", a > b);
console.log("a < b : ", a < b);
console.log("a >= b : ", a >= b);
console.log("a <= b : ", a <= b);


// Logical Operators 
// && (Logical AND), || (Logical OR), ! (Logical Not)
a = 6;
b = 5;

let cond1 = a > b;  //true
let cond2 = a === b; // true

console.log("cond1 && cond2 = ", cond1 && cond2);
console.log("cond1 || cond2 = ", cond1 || cond2);
console.log("!cond1 : ", !cond1);


// Ternary Operators(condition ? true output:false output)

age = 25;

// let result = age >= 18 ? "Adult" : "Not adult";
// console.log(result);

age >= 18 ? console.log("Adult") : console.log("Not adult");