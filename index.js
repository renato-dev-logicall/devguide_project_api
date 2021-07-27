require('dotenv').config();
const app = require('express')() // Loads and starts express
const consign = require('consign') // Loads consign
const db = require('./configs/db')
const dotenv = require('dotenv').config()

app.db = db

consign()
    .then('./configs/middlewares.js')
    .then('./configs/validators')
    .then('./api')
    .then('./configs/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('OK! API DevGuide listening...')
})