const express = require('express');
const route = express.Router();
let pokedex = require('../models/pokemon')

//index route
route.get('/pokemon', (req, res)=>{
    res.send("Welcome to the home route")
})

//show route
route.get('/pokemon/:id', (req, res)=>{
    res.send("Welcome to show route")
})

//new route
route.get('/pokemon/new', (req, res)=>{
    res.send("Welcome to the new route")
})

//edit route
route.get('/pokemon/:id/edit', (req, res)=>{
    res.send("Welcome to the edit route")
})

//create route
route.post('/pokemon', (req, res)=>{
    res.send("Welcome")
})
route.put('/pokemon/:id', (req, res)=>{
    res.send("Welcome")
})

//delete route
route.delete('/pokemon/:id', (req, res)=>{
    res.send("Welcome")
})






module.exports = route