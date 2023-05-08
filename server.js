//first require express
const express = require('express')
const responses = require('./models/8ball.js')

//initialize app
const app = express()
//set the port
const port = 3000

//middleware here

//routes here
app.get('/greeting/:name', (req, res) => {
    res.send(`Hey, great to see you ${req.params.name}`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`Tip is $${(req.params.total * req.params.tipPercentage)/100}`)
})

app.get('/magic/:question', (req, res) => {
    res.send(`<h1>The Magic 8ball says: ${responses[Math.floor((Math.random()*(responses.length)))]}</h1>`)
})

//express listen here
app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})
