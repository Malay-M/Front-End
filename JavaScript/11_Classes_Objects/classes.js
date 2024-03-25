//class: Class is a program-code template for creating objects.
//Those objects will have same state (variables) & some behaviour (function) inside it.


class ToyotaCar {


    //constructor() is a method. i) Automatically invoked by new. ii) Initializes object 
    constructor(brand, mileage) {
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }


    start() {
        console.log("Start");
    }

    stop() {
        console.log("stop");
    }

    // setBrand(brand) {
    //     this.brand = brand;
    // }
}


let fortuner = new ToyotaCar("fortuner", 10);
let lexus = new ToyotaCar("lexus", 12);

console.log(fortuner);
console.log(typeof(fortuner));

fortuner.start();
fortuner.stop();

// fortuner.setBrand("fortuner");


lexus.start();
lexus.stop();

// lexus.setBrand("fortuner");
