const express = require('express');
const { Stats } = require('fs');
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
//delete route
route.delete('/pokemon/:id', (req, res)=>{
    const index = req.params.id
    pokedex.splice(index, 1)
    res.redirect('/pokemon')
    console.log(req.params.id)
})

//edit route
route.get('/pokemon/:id/edit', (req, res)=>{
    res.render("edit.ejs", { deck: pokedex[req.params.id], index: req.params.id})
})

//show route
route.get('/pokemon/:id', (req, res)=>{
    res.render('show.ejs', {pokeInfo: pokedex[req.params.id], Index: [req.params.id]})
})

//edit route
route.put('/pokemon/:id', (req, res) => {
    const editPokemon={
        name: req.body.name,
        stats: {
            attack: req.body.attack,
            defense: req.body.defense,
            spattack: req.body.spattack,
            spdefense: req.body.spdefense,
            speed: req.body.speed
        }
    }
    pokedex[req.params.id]=editPokemon
    res.redirect('/pokemon')
})

//create route
route.post('/pokemon', (req, res)=> {
    const newPokemon = {
        name: req.body.name,
        stats: {
            attack: req.body.attack,
            defense: req.body.defense,
            spattack: req.body.spattack,
            spdefense: req.body.spdefense,
            speed: req.body.speed
        }  
    }
    pokedex[req.params.id]= newPokemon
    pokedex.push(newPokemon)
    res.redirect('/pokemon')
})



module.exports = route