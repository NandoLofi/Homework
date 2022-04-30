require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT;
const app = express();
const methodOverride = require('method-override')
//middleware
app.use(express.urlencoded({extended: false}))
app.use('/public', express.static('public'));
app.use(methodOverride('_method'))





//router
app.use('/', require('./controllers/routes'))

app.listen(PORT, () => console.log(`We are listening on Port ${PORT}`))