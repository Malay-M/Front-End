// DOM: When a web page is loaded, the browser creates a Document Object Model(DOM) of the page.

// console.dir(document.body);
// console.log(document.body);

// console.dir(document.head);

// console.log(document.body.childNodes[1]);

// document.body.childNodes[3].innerText = "abcd";


// DOM mainupulation

//Selecting  with id
let heading = document.getElementById("heading"); 
console.dir(heading);

let button = document.getElementById("myId");
console.log(button);


//Selecting with class
let headings = document.getElementsByClassName("myClass");
console.dir(headings);
console.log(headings);


//Selecting with tag name
let parahs = document.getElementsByTagName("p");
console.dir(parahs);
console.log(parahs);


//Query selector
//Using tags
let firstElement = document.querySelector("p"); // returns 1st element
console.dir(firstElement);

let allElement = document.querySelectorAll("p"); // returns all element
console.dir(allElement);


//Using classes
firstElement = document.querySelector(".myClass"); // returns 1st element
console.dir(firstElement);

allElement = document.querySelectorAll(".myClass"); // returns all element
console.dir(allElement);


//Using Ids
firstElement = document.querySelector("#myId"); // returns 1st element
console.dir(firstElement);



//Properties

//tagName: returns tag for element nodes

console.log(firstElement.tagName);

firstElement = document.querySelector("p"); 
console.dir(firstElement.tagName);


//innerText: returns the text content of the element and all its children

console.log(document.body.firstChild);


let div = document.querySelector("#fruits");
console.dir(div);

console.log(div.innerText);


heading = document.querySelector("h1");
console.dir(heading);


//innerHTML: returns the plain text or HTML contains in the element

heading.innerHTML = "<b>New Heading</b>";


//textContent: returns textual content even for hidden elements.

let hidden = document.querySelector(".hidden");
console.log(hidden.innerText);
console.log(hidden.textContent);