// "use strict" for strict mode. catches reserved words and refuses to run

//var globalScope = "never do this" 

// use const (allows us to change a variable) whenever possible otherwise use let if we ever intend to reassign
const public = "variable" // this will not run because public is a reserved word 

// changing a variable with const
// const is constant in the assignment
// we can change values of constant but we cannot reassign it
const notConstantObject = {}
notConstantObject.name = "hello"

const notConstantArray = [1]
notConstantArray.push(2)
//console.log(notConstantArray)


function someFunction() {
    // function scope
}

{ // block scope - not an object because its missing a key-value pair
   // console.log("what is this") 
}

{// another block scope
    var someVariable = true 
    {
        var someVariable = false
    }
    // will print false 
}

{// with let 
        let someVariable1 = true 
    {
        let someVariable1 = false
    }
    // will print true
}

