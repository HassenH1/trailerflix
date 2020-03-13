const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
  movieID: String,
  userID: [{type: Schema.Types.ObjectId, ref: 'User'}],
  comment: String
})

const Review = mongoose.model("Review", reviewSchema)

module.exports = Review