const express = require('express')
const app = express()
const PORT = 8000
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const user = require('./controllers/user.js')
const reviewController = require('./controllers/review.js')
const cors = require('cors')
require('./db/db.js')

/***middleware***/

// app.all('', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost");
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   next();
// });

// app.use(cors())
// app.options('*', cors())

// const corsOptions = {
//   origin: ['http://localhost'],
//   allowedHeaders: ["Content-Type", "Authorization", "Access-Control-Allow-Methods", "Access-Control-Request-Headers"],
//   credentials: true,
//   enablePreflight: true
// }

// app.use(cors(corsOptions));
// app.options('*', cors(corsOptions))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(methodOverride('_method'))

/**Controllers**/
app.use('/', user)
app.use('/review', reviewController)


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})