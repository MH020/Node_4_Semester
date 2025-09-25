import express from 'express'
import path from 'path'

const app = express()

app.use(express.static("public"))

app.get("/", (req,res) => {
    res.sendFile(path.resolve('public/frontent/index.html'))
})

// task: create /matches and create a corresponding matches page
app.get("/matches", (res,req) => {
    res.sendFile(path.resolve('public/matches/matches.html'))
})

const PORT = 8080
app.listen(PORT, () => {
    console.log("server is running on port", PORT)
})