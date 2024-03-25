// String is a sequence of characters used to represent text


//create string
let str1 = "hello world";
let str2 = 'JavaScript';


// string length
console.log(str1.length);
console.log(str2.length);


//String indices

console.log(str2[0]);
console.log(str2[6]);



// Template Literals: A way to have embedded expressions in strings

let specialString = `This is a template literals`;
console.log(specialString);
console.log(typeof(specialString));

let obj = {
    item : "pen",
    price : 10
};

console.log("The cost of", obj.item, "is", obj.price, "rupees");


//String interpolation: To create string by doing substitution of placeholders
let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);


//String methods: These are build-in functions to mainpilate a string
let str = "JavaScript";
let newStr = str.toUpperCase();
console.log(newStr);


newStr = str.toLowerCase();
console.log(newStr);


str = "     JavaScript     ";
console.log(str);
str = str.trim(); // removes whitespaces
console.log(str)


str = "0123456789";
str1 = "JavaScript";
console.log(str.slice(1, 3));
console.log(str.slice(1, 6));
console.log(str1.slice(0, 4));
console.log(str1.slice(4));


let result = str1.concat(str);
// result = str1 + str;
console.log(result);


str = "hello";
console.log(str.replace("h", "y"));
console.log(str.replace("lo", "p"));

str = "hellolololololololo";
console.log(str.replaceAll("lo", "p"));


str = "JavaScript";
console.log(str.charAt(3));
console.log(str.charAt(4));
console.log(str.charAt(7));
