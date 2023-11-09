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

// ----------------------------------------------------------------------------- //
// ***** Easy Going ***** //

for (let i = 1; i <= 20; i++) {
    console.log(i);
}
// ----------------------------------------------------------------------------- //






// ----------------------------------------------------------------------------- //
// ***** Get Even ***** //

for (let i = 0; i <= 200; i = i + 2) {
    console.log(i);
}
// ----------------------------------------------------------------------------- //





// ----------------------------------------------------------------------------- //
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
// ----------------------------------------------------------------------------- //






// ----------------------------------------------------------------------------- //
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
// ----------------------------------------------------------------------------- //






// ----------------------------------------------------------------------------- //
// ***** Yell at Ninja Turtles ***** //

// Create array for some turtles/artists
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

// Loop through the array and make the names upper case
for (ninjaTurtle of ninjaTurtles) {
    console.log(ninjaTurtle.toUpperCase());
}


// ----------------------------------------------------------------------------- //





// ----------------------------------------------------------------------------- //
// ***** Methods, Revisited ***** //

// Create movies array
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// Log Titanic by it's index
console.log(favMovies[8]);

// 1. Sort the array
console.log(favMovies.sort());

// 2. Pop the last item in the array
console.log(favMovies.pop());

// 3. Place a new iteam at the end of the array
favMovies.push("Guardians of the Galaxy")
console.log(favMovies);

// 4. Reverse the array
favMovies.reverse();
console.log(favMovies);

// 5. Remove the first item in the array
favMovies.shift();
console.log(favMovies);

// 6. At first attempt this returned nothing different, 
//      then I tried placing a name within the parentheses and an item appeared at the beginning of the list,
//      I finally commented out this line of code since the instruction didn't appear to ask for something to be placed back 
//      and supported by question 8. asking for half of the array which this question 6. left me with an odd lenght amount.
// favMovies.unshift("Guardians of the Galax");
favMovies.unshift();
console.log(favMovies);

// 7. Create a variable and assign it the value of the index of "Django Unchained"
const spot = favMovies.indexOf("Django Unchained");
// Use splice and the index value of the variable definied in the previous line to remove that 1 specific item and at that same position insert a new item "Avitar"
favMovies.splice(spot, 1, "Avitar");
// Log the change and view the results
console.log(favMovies);

// 8. Create a variable that contains the count of half of the array.
const halfCt = (favMovies.length / 2);

// 9.
// Slice the last half of the movies into variable secHalf as a separate array
const secHalf = favMovies.slice(halfCt);
// print the array from variable secHalf 
console.log(secHalf);

// 10. log final results
console.log(favMovies);

// - F&F:
const spot2 = favMovies.indexOf("Fast and Furious");
console.log(spot2)
// ----------------------------------------------------------------------------- //





// ----------------------------------------------------------------------------- //
// ***** Where is Waldo ***** //

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

                    // Remove Eggbert (hint look at the slice/splice method(s))
                    // Change "Neff" to "No One"
                    // Access and console.log "Waldo"

// Using (1) to locate the part of the array where "Eggbert" is located and (1) to remove one item
let removed = whereIsWaldo.splice(1,1);

// Using [1] to select the specific array and [2] for the specific item and replacing it with "No One"
whereIsWaldo[1][2] = "No One";
// Log the results of updating "Neff" to "No One"
console.log(whereIsWaldo);

// Using [2] to access the 3rd array then [1] to get the nested second part of that array and [1] to access the second item 'Waldo'
const waldo = whereIsWaldo[2][1][1];
// Log the results of finding "Waldo"
console.log(waldo);

// ----------------------------------------------------------------------------- //

