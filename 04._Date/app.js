const express = require("express")
const app = express() // instantierer express

console.log(Date.now()) // unix epoch time seconds since jan 1st 1970
console.log(new Date()) // UTC 

// task: create a route called /months that responds with the current month 
const months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"
]

app.get("/month/v1", (req, res) => { 
const currentMonth = months[new Date().getMonth()]

res.send({data: currentMonth})
})

app.get("/month/v2", (req, res) => { 
    
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth()
    
    res.send({ data: currentMonth })
})

app.get("/month/v3", (req, res) => {
    
    const currentDate = new Date();
    const currentMonthName = currentDate.toLocaleString("default", {month: "long"})
    
    res.send({ data: currentMonthName}) 
})
///////////

// task: write /day and respond with the weekday (thursday)
//initiate the array outside 
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] // because americas weeks start on sundays

app.get("/day/v1", (req,res) => {
    const currentDay = days[new Date().getDay()]

res.send({data: currentDay})
})

app.get("/day/v2", (req,res) => {
    const currentDay = new Date().toLocaleDateString("en-uk", {weekday: "long"})
    res.send({data: currentDay})
})
////////////////

const PORT = 8080
app.listen(PORT, () => {
    console.log("server is running on port", PORT)
})