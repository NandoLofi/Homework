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
    res.render('show.ejs', {pokeInfo: pokedex[req.params.id], Index: [req.params.id]})
})



//create route
route.post('/pokemon', (req, res)=>{
    res.send("Welcome")
})

//edit route
route.get('/pokemon/:id/edit', (req, res)=>{
    res.render("edit.ejs", { deck: pokedex[req.params.id], index: req.params.id})
})
//edit route
route.put('/pokemon/:id', (req, res) =>{
    pokedex[req.params.id] = req.body
    res.redirect('/pokemon')
})


//delete route
route.delete('/pokemon/:id', (req, res)=>{
    res.send("Welcome")
})






module.exports = route