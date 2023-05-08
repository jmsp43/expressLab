//first require express
const express = require('express')

//initialize app
const app = express()
//set the port
const port = 3000

//middleware here

//routes here
app.get('/greeting/:name', (req, res) => {
    res.send(`Hey, great to see you ${req.params.name}`)
})

//express listen here
app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})
