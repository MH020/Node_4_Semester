import express from "express" // never using require again 
const app = express()

import path from "path"

app.get("/", (req,res) => {
    res.sendFile(path.resolve("public/frontend/index.html"))
})

app.use(express.static("public")) //det vil give adgang til hele public mappen i stedet for at man skal give specifik path hver gang man skal hive fat i en fil fra den mappe
// sikkerhedsfeature

//const candyCommon = require("./util/candyCommon.js") //fil import
import candyESModule from "./util/candyESModule.js" //husk .js 
console.log(candyESModule)  

app.get("/candy", (req,res) => {
    res.sendFile(path.resolve("public/candy/candy.html"))
})

console.log(path.resolve("public/redirection/redirection.html"))

// task: create a /redirection and page called redirection.html
app.get("/redirection", (req,res) => {
    res.sendFile(path.resolve("public/redirection/redirection.html")) // __dirname doesnt work in ecmascript - only in common js
})

let visitorsCount = 0

app.get("/visitorscount", (req,res) => {
    res.send({ data: ++visitorsCount })
})

app.get("/visitorsdoorway", (req,res) => { // the user will be redirected to visitorscount 
    res.redirect("/visitorscount") // redirection in frontend means the browser will take u to different pages, but in the backend it means it will redirect u to another route 
})

const PORT = 8080
app.listen(8080, () => {
    console.log("server is running on port", PORT)
})