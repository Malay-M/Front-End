//Inheritance: Inheritance is passing down properties & methods from parent class to child class.



// class Parent {
     
//     hello() {
//         console.log("hello");
//     }
// }

// class Child extends Parent {

// }



// let obj = new Child();
// obj.hello();


class Person {


    constructor(name) {
        console.log("Enter parent constructor");
        this.species = "homo sapiens";
        this.name = name;
    }


    eat() {
        console.log("eat");
    }

    // sleep() {
    //     console.log("sleep");
    // }

    // work() {
    //     console.log("Do nothing");
    // }
}

class Enginner extends Person {

    constructor(name) {
        console.log("Enter child constructor");
        super();    // to invoke parent class constructor
        // this.branch = branch;
        console.log("Exit child constructor");
        super.name = name;
    }

    work() {
        super.eat();
        console.log("Solve problems, build something");
    }
}

// class Doctor extends Person {
//     work() {
//         console.log("treat patient");
//     }
// }


// let student = new Enginner();

// student.work();

// let p1 = new Person();
// console.log(p1);

// let e1 = new Enginner();
// console.log(e1);

let engObj = new Enginner("student");
console.log(engObj);
engObj.work();