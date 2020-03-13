const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
  movieid: String,
  userid: [{type: Schema.Types.ObjectId, ref: 'User'}],
  comment: String
})

const Review = mongoose.model("Review", reviewSchema)

module.exports = Review