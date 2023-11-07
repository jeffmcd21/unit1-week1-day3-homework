// ------------------------------------------------Part I: HTML & CSS------------------------------------------------ //

// HTML Intro (Hyper Text Markup Language) 
    // 4 - I feel pretty good about the material, but some extra review would help
        // Tags
        // Content/Attributes (is within the tags)
        // Symantic is choosing tags based off function

// HTML Elements
    // 3 - I almost feel like I've got it

// CSS Intro (Cascading Style Sheet)
    // 4 - I feel pretty good about the material, but some extra review would help

// CSS Basics
    // 4 - I feel pretty good about the material, but some extra review would help


// ------------------------------------------------Part II: JavaScript Reps------------------------------------------------ //

// ---------------------- //
// ***** Easy Going ***** //

for (let i = 1; i <= 20; i++) {
    console.log(i);
}
// ---------------------- //


// ---------------------- //
// ***** Get Even ***** //

for (let i = 0; i <= 200; i = i + 2) {
    console.log(i);
}
// ---------------------- //


// ---------------------- //
// ***** Fizz Buzz ***** //

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
// ---------------------- //


// ---------------------- //
// ***** Wild Wild Life ***** //

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// 1. update plantee's birthday to be one year older
plantee[2] = 5001; 
console.log(plantee);

// 2. change Wolfy's hometown from "Yukon Territory" to "Gotham City"
wolfy[3] = "Gotham City";
console.log(wolfy);

// 3. Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins");
console.log(dart);

// 4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy"
wolfy.shift();
console.log(wolfy);

wolfy.unshift("Gameboy");
console.log(wolfy);
// ---------------------- //


// ---------------------- //
// ***** Yell at Ninja Turtles ***** //

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

for (ninjaTurtle of ninjaTurtles) {
    console.log(ninjaTurtle.toUpperCase());
}


// ---------------------- //


