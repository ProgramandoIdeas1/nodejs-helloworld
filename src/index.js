const express = require('express')
const app = express()

// settings
app.set('port', process.env.PORT || 5000)
//app.set('port', 5000)

// middlewares

// routes
app.get('/', (req, res) => {
    res.send('Hello World! Programando Ideas!')
})
// static files

// listening the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})