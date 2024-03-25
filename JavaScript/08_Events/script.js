//Events: The change in the state of an object is known as a Event
// Events are fired to notify code of "interesting changes" that may affect code execution.


let btn1 = document.querySelector("#btn1");

let a = 0;
btn1.onclick = () => {
    console.log("Button was clicked");
    a++;
    console.log(a);

}


let box = document.querySelector("div");

box.onmouseover = () => {
    console.log("You are inside a box");

    
}


//Event object

btn1 = document.querySelector("#btn1");

btn1.onclick = (evt) => {
    console.log("Button was clicked");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX);
    console.log(evt.clientY);


}


box.onmouseover = (evt) => {
    console.log("You are inside a box");

    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX);
    console.log(evt.clientY);
}



// Event Listeners


// addEventListener Add a event
btn1.addEventListener("click", (evt) => {
    console.log("button was clicked - handler 1");
    console.log(evt.type);
});


//Remove a event

btn1.addEventListener("click", (evt) => {
    console.log("button was clicked - handler 2");
});


// making a function that may remove in future
const handler3 = (evt) => {
    console.log("button was clicked - handler 3");
};


btn1.addEventListener("click", handler3);


btn1.addEventListener("click", (evt) => {
    console.log("button was clicked - handler 4");
});


// the callback reference should be same to remove
btn1.removeEventListener("click", handler3);