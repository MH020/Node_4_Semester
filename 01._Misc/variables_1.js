// node <file_name>

// use const if possible, otherwise use let (not var) const fanger mange fejl (hvad er const? næste uge)

const name = "Jasmin"

console.log("Hello world", name) // ikke glade for +. forskel på + og , er at man ikke vil ændre på information/typer/data når man skal console.log og det gør man med +

console.log(`Hello ${name}`, 4) // ting ses som en string i terminalen når det er samme farve, hvis det er et tal bliver det en anden farve

// string literals 
const firstGreeting = 'it is a nice day'
const secondGreeting = "it's a nice day" // singular apostroph kan ikke bruges i firstGreeting
const thirdGreeting = `it's a nice " day` // begge fungerer med backticks. anden fordel: multi-line

// js objects, data types
// data types: String, Boolean, Number, BigInt, Symbol, Object, undefined, null

// js object
const person = {
    name: "Jasmin" // key-value pair
} // javascript object: ikke JSON fordi der er der også "" rundt om key 

