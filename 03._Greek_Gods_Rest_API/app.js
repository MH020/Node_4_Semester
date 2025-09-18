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

//let lastId = 2

let nextId = 3

// postfix notation 2, 3
// console.log(lastId++)
// console.log(lastId)

// prefix notation 3, 3
// console.log(++lastId)
// console.log(lastId)

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



app.post("/greekgods", (req, res) => { //
        if(!req.body){
            return res.status(400).send({errorMessage:"requires a JSON body"})
        }

        const newGreekGod =  req.body
        //req.body.id = lastId++ // undefined.id, missing a body parser
        req.body.id = nextId++
        greekGods.push(newGreekGod)
        
        res.send({ data: newGreekGod })
})

// spread operator ... removes the content from an array and spreads it into other arrays 
// const bicycle = {
//     yawn: true,
// } 

// const bicycle = {
//     yawn: false
// } // will return false
// const test = {...bicycleOne}
// console.log({ ...bicycleOne, ...bicycleTwo })

app.patch("/greekgods/:id", (req,res) => {
    const providedGreekGodId = Number(req.params.id)
    const foundGreekGodIndex = greekGods.find((greekGod) => greekGod.id === providedGreekGodId)

    if (!foundGreekGodIndex === -1) {
        returnres.status(404).send({ errorMessage: `Greek God not found by id ${providedGreekGodId}`  })
    }

    const foundGreekGod = greekGods[foundGreekGodIndex]
    const newGreekGod = {...foundGreekGod, ...req.body, id: foundGreekGod.id}

    greekGods[foundGreekGodIndex]=newGreekGod

    res.send({ data: newGreekGod})
})

app.delete("/greekgods/:id", (req,res) => {
    // filter is a bad solution here
    const providedGreekGodId = Number(req.params.id)
    const foundGreekGod = greekGods.find((greekGod) => greekGod.id === providedGreekGodId)

    if (!foundGreekGodIndex === -1) {
        return res.status(400).send({ errorMessage: `Greek God not found by id ${providedGreekGodId}` })
    } else {
        greekGods.splice(foundGreekGodIndex, 1)
        
        res.status(204).send()
    }
})


// 2xx - success
// 4xx - client failed
// 5xx - server failed


//task: app.listen can be given a callback function in the second argument. console.log something in it 
// skal være i bunden af siden 
const PORT = 8080 //
app.listen(8080, (error) => { 
    if (error) {
        console.log("error starting the server", error)
        return 
    }
    console.log("something") 
})