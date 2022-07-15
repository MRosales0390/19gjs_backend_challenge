const httpError = require("http-errors")
const Post = require("../models/post.model")

// const update = (id, postData) => {
//   return (post = Post.findByIdAndUpdate(id, postData))
// }

// const remove = (id) => {
//   return (post = Post.findByIdAndDelete(id))
// }
 const createPost = (postData) => {
  console.log = ("create", postData)
  const post = Post.create(postData)
  return post
 }


module.exports = { createPost }
