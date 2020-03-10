const express = require("express")
const router = express.Router()

router.post("/", (req,res) => {
  console.log("the signup route is hitting in expresssssssssssssssssssssssssssssssssssssss!")
  console.log(req.body, "<-------------------------------------------might work for real")
})

module.exports = router