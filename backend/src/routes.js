const routes = require('express').Router()

routes.get('/', (req, res) => {
    return res.send('ola')
})

module.exports = routes