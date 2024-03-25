//DOM Manipulation

let div = document.querySelector("div");
console.log(div);


//getAttribute(attr): to get the attribute value
let id = div.getAttribute("id");

console.log(id);

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));



//setAttribute(attr, value): to set the attribute value

para.setAttribute("class", "newClass");

console.log(para.getAttribute("class"));



//style

div.style.backgroundColor = "green";
div.style.backgroundColor = "purple";

// div.style.fontSize = "26px";

// div.innerText = "Hello!:)";


//Insert Elements

let newButton = document.createElement("button");

newButton.innerText = "click me!";
console.log(newButton);


// div.append(newButton); //adds at the end of node(inside)

// div.prepend(newButton); //adds at the start of the node(inside)

// div.before(newButton); //adds before the node (outside)

// div.before(newButton); //adds after the node (outside)



let p = document.querySelector("p");
p.after(newButton);



let newHeading = document.createElement("h1");
newHeading.innerHTML="<i>New Heading</i>";

document.querySelector("body").prepend(newHeading);



//Delete element

para = document.querySelector("p");
para.remove();

newHeading.remove();