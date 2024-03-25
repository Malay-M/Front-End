// Async-Await: Async function always returns a promise.

async function hello() {
    console.log("hello");
}

//Await pauses the execution of its surrounding async function until the promise is settled.


// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200)
//         }, 2000);
//     });
// }


// async function getWeatherData() {
//     await api();   
//     await api();
// }


function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("succes");
        }, 2000);
    });
}


async function getAllData() {
    console.log("getting data1....")
    await getData(1);
    console.log("getting data2....")
    await getData(2);
    console.log("getting data3....")
    await getData(3);
    console.log("getting data4....")
    await getData(4);
    console.log("getting data5....")
    await getData(5);
    console.log("getting data6....")
    await getData(6);
}


// getAllData();



// IIFE: Immediately Invoked Function Expression
//IIFE is a function that is called immediately as soon as it is defined.
(async function () {
    console.log("getting data1....")
    await getData(1);
    console.log("getting data2....")
    await getData(2);
    console.log("getting data3....")
    await getData(3);
})();
