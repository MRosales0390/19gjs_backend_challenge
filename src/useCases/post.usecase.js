const httpError = require("http-errors")
const Post = require("../models/post.model")

const update = (id, postData) => {
  return (post = Post.findByIdAndUpdate(id, postData))
}

const remove = (id) => {
  return (post = Post.findByIdAndDelete(id))
}

module.exports = { update, remove }
