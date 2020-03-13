// movieid: String,
// userid: [{type: Schema.Types.ObjectId, ref: 'User'}],
// comment: String,

const express = require("express")
const router = express.Router()

const Review = require("../models/Review")
const User = require("../models/User")

router.post("/post", async (req, res) => {
  console.log(req.body, "<--------------------whats in the body")
  try {
    const r = await Review.create(req.body)
    res.json(r)
  } catch (err) {
    console.log(err)
  }
})

router.get("/get", async (req,res) => {
  try {
    
    // const rFind = Review.findById()
  } catch(err) {
    console.log(err)
  }
})

module.exports = router

// try {
//   const get = await User.findOne({ "email": req.body.email, "password": req.body.password })
//   if (get === null) {
//     res.status(400).send({
//       message: 'This is an error!'
//     });
//     return
//   } else {
//     res.json(get)
//   }
// } catch (err) {
//   console.log(err)
// }