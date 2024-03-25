//Synchronous: Synchronous means the code runs in a paricular sequence of instructions given in 
// the program. Each instruction waits for the previous instruction to complete its execution.


console.log("one");
console.log("two");
console.log("three");



//Asynchronous: Due to synchronous programming sometimes imp instructions get blocked due to some previous
// instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions
// immediately and doesn't block the flow.

function hello() {
    console.log("hello");
}


setTimeout(hello, 4000);    //timeout : 2s = 2000ms

console.log("four");