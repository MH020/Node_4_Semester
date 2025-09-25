const express = require("express")
const app = express()

// app.get("/", (req,res) => {
//     res.sendFile(__dirname + "/public/frontend/index.html")
// })

app.use(express.static("public")) //det vil give adgang til hele public mappen i stedet for at man skal give specifik path hver gang man skal hive fat i en fil fra den mappe
// sikkerhedsfeature

let visitorsCount = 0

app.get("/candy", (req,res) => {
    res.sendFile(__dirname + "/public/frontend/candy/candy.html")
})

app.get("/visitorscount", (req,res) => {
    res.send({ data: ++visitorsCount })
})

const PORT = 8080
app.listen(8080, () => {
    console.log("server is running on port", PORT)
})