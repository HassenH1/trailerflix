const express = require("express")
const router = express.Router()

router.post("/", async (req,res) => {
  console.log(req.body, "<-------------------------------------------its working")
  try {

  } catch(err) {
    console.log(err)
  }
})

module.exports = router