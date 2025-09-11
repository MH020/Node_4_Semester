// practice loops 

/* methods to loop, not ways to loop
// .forEach - runs through each element in the list , does not return a new list , used when u dont care about the values afterwards (rare use in js)
// .find - 
// .filter - filter items on the list and creates a new array with the same amount on the list 1:1 or less
// .map - returns a new list 1:1
// .reduce - 
// .indexOf -
    splice og slice har med arrays at gøre
*/

console.log("loop methods")

// intro til nodemon - rebuilds project after file changes, nodemon is only for development

const numbers = [1, 2, 3, 4, 5]
// use loop methods unless you are counting with your fingers - i js undgår vi for loops

// task: double the numbers above 
// side effect (comp. science) påvirker variabler udenfor - det vil vi ikke 

// map returns a new list 1:1 
const doubledNumbers = numbers.map((number) => number * 2)
console.log(doubledNumbers)

////////////////////

const desserts = [
    {
        name: "flan",
        weightGram: 200
    },
    {
        name: "banana split",
        weightGram: 700
    },
    {
        name: "brownie",
        weightGram: 600
    }
]

// task: make all desserts weight 400 gram extra except for brownie 
// const extraWeight = desserts.map((desserts) => {
//     if (desserts.name !== "brownie") {
//         desserts.weightGram += 400
//     }
//     return desserts // always need a return statement - when there are no {} it expects the return statement to be on the same line, like in line 21
// })
// console.log(extraWeight)

// ternary statement - another solution 
const extraWeight = desserts.map((desserts) => ({
    name: desserts.name,
    weightGram: desserts.name === "brownie" ? desserts.weightGram : desserts.weightGram + 400
}))

console.log(extraWeight)
/////////////////////

numbers.map((element, index, array) => console.log(element, index, array)) 