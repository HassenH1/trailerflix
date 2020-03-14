const express = require("express")
const router = express.Router()

const Review = require("../models/Review")
const User = require("../models/User")

router.post("/post", async (req, res) => {
  try {
    const r = await Review.create(req.body)
    res.json(r)
  } catch (err) {
    console.log(err)
  }
})

router.get("/get", async (req,res) => {
  try {
    // const rFind = Review.find({})
    // console.log(rFind, ",-----------------whats this?")
    // res.json(rFind)

    Review.find({}, function(err, review) {
      if (err) {
        res.status(404).send(err);
      } else {
        res.json(review);
      }
    })
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