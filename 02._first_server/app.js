const express = require ("express")
const app = express()
// const app = require("express")() kan ikke bruges 

//console.log(app)

//route (handler)
app.get("/planets", (req, res) => { //2 arguments, the endpoint and the callback function 
    res.send({name: "jupiter"}) // vi sender json og ikke string - det er der mange grunde til 
})

// task: create planets/favPlanets that returns your favorite planet
app.get("/planets/favPlanet", (req, res) => {
    res.send({name: "neptune"})
})


// man kan sende data igennem GET request på 2 måder: i url'en og 
                    //path variable
app.get("/waterfalls/:likingScore", (req, res) => { // ingen body, datatype på likingscore: string, fordi alt der skrives i path variable er strings 
    //console.log(req.params)

    //respond with "u like watterfalls this much: likingscore"
    res.send({response: `u like waterfalls this much: ${req.params.likingScore}`})
})

// task: create a /bag route that can take 2 path variables where the client can define what should go in it, then respond with what the bag contains
app.get("/bag/:item1/:item2", (req, res) => { // ingen body, datatype på likingscore: string, fordi alt der skrives i path variable er strings 
    //console.log(req.params)

    //respond with "u like watterfalls this much: likingscore"
    res.send({response: `u like waterfalls this much: ${req.params.likingScore}`})
})

// skal være i bunden af siden 
app.listen(8080) // 8080 fordi det er vores lokale port(http developer port) og vi kender den fra tomcat
