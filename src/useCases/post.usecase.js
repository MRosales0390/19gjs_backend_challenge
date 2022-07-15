const httpError = require("http-errors")
const Post = require("../models/post.model")

const update = (id, postData) => {
  return Post.findByIdAndUpdate(id, postData)
}

const remove = (id) => {
  return Post.findByIdAndDelete(id)
}

module.exports = { update, remove }
