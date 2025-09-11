const express = require("express")
const app = express()

// det giver mening at have datastrukturen i et array
const greekGods = [
    {
        id: 1,
        name: "Zeus"
    },
    {
        id: 2,
        name: "Hercules",
        isDemiGod: true
    }
]

//route (handler)
app.get("/greekgods", (req, res) => { //2 arguments, the endpoint and the callback function 
    res.send({ data: greekGods }) // vi sender json og ikke string - det er der mange grunde til (1 grund, så kan andre servere parse det )
}) // .json er en legacy ting i express - derfor bruger vi res.send i stedet for 

app.get("/greekgods/:id", (req, res) => {
    const providedGreekGodId = Number(req.params.id)
    const foundGreekGod = greekGods.find((greekGod) => greekGod.id === providedGreekGodId)

    if (!foundGreekGod) {
        res.status(404).send({ errorMessage: `Greek God not found by id ${providedGreekGodId}` })
    } else {
        res.send({ data: foundGreekGod })
    }
})

// design resten af API'et - udfordringen er hvordan man vil håndtere Id

// skal være i bunden af siden 
app.listen(8080) // 8080 fordi det er vores lokale port(http developer port) og vi kender den fra tomcat