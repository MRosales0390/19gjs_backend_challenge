const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: 1,
    maxLength: 100,
    required: true
  },
  content: {
    type: String,
    minLength: 1,
    maxLength: 1500,
    required: true
  },
  tags: {
    type: [String],
    minLength: 3,
    maxLength: 10,
    required: true
  },
  urlCoverImage: {
    type: String
  },
  author: {
    type: String,
    minLength: 5,
    maxLength: 50,
    required: true
  },
  authorAvatar: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now()
  },
  minToRead: {
    type: Number,
    maximum: 9999
  }
})

module.exports = mongoose.model("posts", postSchema)
