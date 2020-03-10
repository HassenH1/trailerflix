const express = require('express')
const app = express()
const PORT = 8000
const bodyParser = require('body-parser')
var methodOverride = require('method-override')
const signUp = require('./controllers/signup.js')
const cors = require('cors')


/***middleware***/
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.use(methodOverride('_method'))

/**Controllers**/
app.use('/signup', signUp)
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})