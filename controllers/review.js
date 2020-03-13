// movieid: String,
// userid: [{type: Schema.Types.ObjectId, ref: 'User'}],
// comment: String,

const express = require("express")
const router = express.Router()

const Review = require("../models/Review")
const User = require("../models/User")

router.post("/post", (req, res) => {
  console.log(req.body, "<--------------------whats in the body")
})

module.exports = router