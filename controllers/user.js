const express = require("express")
const router = express.Router()

const User = require("../models/User.js")

router.post("/signup", async (req,res) => {
  try {
    const createUser = await User.create(req.body)

    res.json(createUser)

  } catch(err) {

    console.log(err)
  
  }
})

router.get("/signin", (req,res) => {
  console.log(req.body, "<---------------------------------------------signin route expressssssssssss")
})

module.exports = router