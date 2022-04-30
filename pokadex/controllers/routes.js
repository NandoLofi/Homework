const express = require('express');
const route = express.Router();
let pokedex = require('../models/pokemon')

//index route
route.get('/pokemon', (req, res)=>{
    res.render("index.ejs", {Deck: pokedex})
})

//new route
route.get('/pokemon/new', (req, res)=>{
    res.render('new.ejs')
})
//show route
route.get('/pokemon/:id', (req, res)=>{
    res.render('show.ejs', {pokeInfo: pokedex[req.params.id]})
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