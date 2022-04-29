const express = require('express');
const route = express.Router();
let pokedex = require('../models/pokemon')

//index route
route.get('/', (req, res)=>{
    res.send("Welcome to the home route")
})

//create route

//update route

//delete route







module.exports = route