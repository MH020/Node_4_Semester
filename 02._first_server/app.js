const express = require ("express")
const app = express()
// const app = require("express")() kan ikke bruges 

//console.log(app)

// set up body parsing 
app.use(express.json())

//route (handler)
app.get("/planets", (req, res) => { //2 arguments, the endpoint and the callback function 
    res.send({name: "jupiter"}) // vi sender json og ikke string - det er der mange grunde til 
})

app.get("/fashionbrands", (req, res) => {
    //res.sendFile("/workspaces/nodejs/Node_4_Semester/02._first_server/index.html") // denne måde er ikke særlig fleksibel fordi det kun vil virke på egen lokale maskine
    res.sendFile(__dirname + "/index.html") // det her virker for alle 
})

// task: create planets/favPlanets that returns your favorite planet
app.get("/planets/favPlanet", (req, res) => {
    res.send({name: "neptune"})
})


// man kan sende data igennem GET request på 2 måder: i url'en (query string) og 
                    //path variable
app.get("/waterfalls/:likingScore", (req, res) => { // ingen body, datatype på likingscore: string, fordi alt der skrives i path variable er strings 
    //console.log(req.params)

    //respond with "u like watterfalls this much: likingscore"
    res.send({response: `u like waterfalls this much: ${req.params.likingScore}`})
})

///////////////////////////////////
// task: create a /bag route that can take 2 path variables where the client can define what should go in it, then respond with what the bag contains
app.get("/bag/:item1/:item2", (req, res) => { // ingen body, datatype på likingscore: string, fordi alt der skrives i path variable er strings 
    //console.log(req.params)

    //respond with "u like watterfalls this much: likingscore"
    res.send({response: `u like waterfalls this much: ${req.params.likingScore}`})
})
////////////////////////////////////
// task: create a GET /urls route , create a query string with the length of "medium" and spiciness level of 6
app.get("/urls", (req, res) => {
    // ?length=medium&spiciness=6
    console.log(req.query)
    res.send({ data: req.query })
})
////////////////////////////////////

app.post("/subjects", (req, res) => { // REQ IS BEFORE RES
    console.log(req.body)
    res.send({ data: req.body})
})

////////////
// task: create a POST fashion brands and try sending a new fashion brand
app.post("/fashionbrands", (req, res) => {
    res.send({  })
})
////////////

// skal være i bunden af siden 
app.listen(8080) // 8080 fordi det er vores lokale port(http developer port) og tomcat bruger 8080
