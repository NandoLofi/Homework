require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT;
const app = express();

//middleware
app.use(express.urlencoded({extended: false}))
app.use('/public', express.static('public'));





//router
app.use('/', require('./controllers/routes'))

app.listen(PORT, () => console.log(`We are listening on Port ${PORT}`))