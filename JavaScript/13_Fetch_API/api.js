//API: Application Programming Interface
//Fetch API: The Fetch API provides an interface for fetching (sending/receiving) resource.
//It used Request and Response objects.

const URL = "https://cat-fact.herokuapp.com/facts";

const factPara = document.querySelector("#fact");
const button = document.querySelector("#button");


// The fetch() method is used to fetch a resource(data). 

//AJAX is asynchronous JS & XML
//JSON is JavaScript Object Notation


//Fetching api using async-await
const getFacts = async () => {
    console.log("Getting data.....");
    let response = await fetch(URL);
    console.log(response);  //JSON format
    console.log(response.status);

    let data = await response.json()
    console.log(data[0].text);
    factPara.innerText = data[3].text;
}


//Fetching api using Promises
// function getFacts() {
//     fetch(URL).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//         factPara.innerText = data[3].text;
//     })
// }

button.addEventListener("click", getFacts);



