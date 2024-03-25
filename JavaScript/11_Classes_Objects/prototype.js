//Prototype: A javascript is an entity having state and behavior(properties and method).
// JavaScript objects have a special property called prototype.


const student = {
    fullName : "Tony Stark",
    marks : 94.4,
    printMarks: function() {
        console.log("Marks:", this.marks);  // student.marks
    }
};



const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },

    calTax2 : function () {
        console.log("tax rate is 10%");
    }
};



//if object & prototype have same method, object's method will be used.
const KaranArjun = {
    salary : 50000,
    calcTax() {
        console.log("tax rate is 20%");
    }
}

const KaranArjun2 = {
    salary : 50000
}

const KaranArjun3 = {
    salary : 50000
}

const KaranArjun4 = {
    salary : 50000
}

KaranArjun.__proto__ = employee;  //setting prototype
KaranArjun2.__proto__ = employee;
KaranArjun3.__proto__ = employee;
KaranArjun4.__proto__ = employee;