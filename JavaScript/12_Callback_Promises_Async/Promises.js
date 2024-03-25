//Promises: Promise is for "eventual" completion of task. It is an object in JS.
// It is a solution to callback hell.




// resolve & reject are callbacks provided by JS.
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a Promise");
//     // resolve("success");
//     // reject("some error occurred");
// });


// A javaScript Promise object can be:
// Pending: the result is undefined
// Resolved: the result is a value (fulfilled)
// Rejected: the result is an error object


function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("succes");
            // reject("error");
            if(getNextData) {
                getNextData();
            }
            
        }, 3000);
    });
}


// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("success");
//         // reject("network error");
//     });
// };


// let promise = getPromise();
// promise.then(() => {
//     console.log("promise fullfilled");
// });

// promise.catch((error) => {
//     console.log("rejected", error);
// });


//Promise Chain

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     });
// }




// console.log("Fetching data1....")
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
//     console.log("Fetching data2....")
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log(res);
//     });
// });


//Promise Chain

// let p1 = getData(1);
// p1.then((res) => {
//     console.log(res);
//     let p2 = getData(2);
//     p2.then((res) => {
//         console.log(res);
//     });
// });


getData(1).then((res) => {
    return getData(2);
}).then((res) => {
    return getData(3);
}).then((res) => {
    console.log(res);
})

