// Arrays: Collection of items(immutable)

//create array

let marks = [97, 82, 75, 64, 36];
console.log(marks);
console.log(marks.length);

let heros = ["ironman", "spiderman", "thor", "hulk"];
console.log(heros);
console.log(typeof(heros));


// Array indices

console.log(marks[0]);
console.log(marks[2]);
console.log(marks[9]);

marks[3] = 90;
console.log(marks);


//Looping over an array

//for loop

for(let i = 0; i < heros.length; i++) {
    console.log(heros[i]);
}

//for-of loop

for(let hero of heros) {
    console.log(hero);
}

let cities = ["Delhi", "Pune", "Mumbai", "Hydrabad", "Kolkata"];

for (let city of cities) {
    console.log(city.toUpperCase());
}


// Array methods

let foodItems = ["potato", "apple", "litchi", "tomato"];
console.log(foodItems);

//push(): add element to the end
foodItems.push("chips", "burger", "paneer");
console.log(foodItems);

//pop(): delete from end & return
console.log(foodItems);
let delItem = foodItems.pop();
console.log(foodItems);
console.log("Deleted", delItem);

// toString(): Converts array to string
console.log(foodItems);
console.log(foodItems.toString());

console.log(marks.toString());


//concat(): joins multiple arrays & returns result

let marvel_heros = ["thor", "spiderman", "ironman"];
let dc_heros = ["superman", "batman"];

heros = marvel_heros.concat(dc_heros);
console.log(heros);


//unshift(): add to start

marvel_heros.unshift("antman");
console.log(marvel_heros);

//shift(): delete from start & return

let val = marvel_heros.shift();
console.log("Deleted", val);


//slice(): returns a piece of the array

marvel_heros = ["thor", "spiderman", "ironman", "antman", "Dr. Strange"];

console.log(marvel_heros);

console.log(marvel_heros.slice(1, 5));
console.log(marvel_heros.slice(1, 3));
console.log(marvel_heros.slice(2));


//splice(): change original array (add, remove, replace)

let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(2, 2, 101, 102);

console.log(arr);

//Add element
arr.splice(2, 0, 100);
console.log(arr);

//Delete element
arr.splice(3, 1);
console.log(arr);

//Replace element
arr.splice(3, 1, 200);
console.log(arr);