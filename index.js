const app = require('express')() // Loads and starts express
const consign = require('consign') // Loads consign

consign() // Feito pelo Consign
    .then('./configs/middlewares.js')
    .then('./api')
    .then('./configs/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('OK! API DevGuide listening...')
})