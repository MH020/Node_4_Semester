// hoisting - ??
//console.log(getRandomInt(5, 10))

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

// anonymous function - had no name
const getRandomAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

// arrow function (not lambda in js)
const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

//console.log(getRandomIntArrowFunction) // will just print the function reference 

// callback function (action) - a function passed into another function as an argument, and only potentially invoked later 
// callback functions are not always called (?)
function genericActionPerformer(name, action) {
    return action(name) 
}

//
function cookingAction(name) {
    return `${name} enjoys cooking.`
}

// task: using the genericActionPerformer, console.log "name enjoys cooking"
// task: do it in one line
//console.log(genericActionPerformer("Bear", cookingAction)) // can take anything generic and specify a specific action to it

// task: using an arrow function below, console.log(name loves to run)
const run = (name) => {
    return `${name} loves to run.` 
}
//console.log(genericActionPerformer("nobody", run)) 

// task in a single line below write "name likes asking questions"
console.log(genericActionPerformer("who", (name) => `${name} likes asking questions`))