const express = require('express')
const app = express()
const PORT = 8000
const bodyParser = require('body-parser')
var methodOverride = require('method-override')
const user = require('./controllers/user.js')
const reviewController = require('./controllers/review.js')
const cors = require('cors')
require('./db/db.js')

/***middleware***/
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.use(methodOverride('_method'))

/**Controllers**/
app.use('/', user)
app.use('/review', reviewController)


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})