//Callbacks: A callback is a function passsed as an argument to another function.


// function sum(a, b) {
//     console.log(a + b);
// }


// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// calculator(1, 2, sum);




// Callback Hell: Nested callbacks stacked below one another forming a pyramid structure.


//nesting
// let age = 20;

// if(age >= 18) {
//     if(age >= 60) {
//         console.log("senior");
//     } else {
//         console.log("middle");
//     }
// } else {
//     console.log("child");
// }


function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data",dataId);
        if(getNextData) {
            getNextData();
        }
        
    }, 2000);
}

//callback hell
getData(1, () => {
    console.log("getting data2...");
    getData(2, () => {
        console.log("getting data3...");
        getData(3, () => {
            console.log("getting data4...");
            getData(4);
        })
    });
});


