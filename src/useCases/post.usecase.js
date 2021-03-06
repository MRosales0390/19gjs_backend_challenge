const createError = require("http-errors")
const Post = require("../models/post.model")

const createPost = (postData) => {
  console.log = ("create", postData)
  const post = Post.create(postData)
  return post
}

// GET ALL
const getAll = () => {
  const getPosts = Post.find({})
  return getPosts
}

// GET BY ID
const getById = (id) => {
  const getPost = Post.findById(id)

  if (!getPost) {
    const error = createError(404, "Post no encontrado")
    throw error
  }
  return getPost
}

const update = (id, postData) => {
  return (post = Post.findByIdAndUpdate(id, postData))
}

const remove = (id) => {
  return (post = Post.findByIdAndDelete(id))
}

module.exports = { getAll, getById, update, remove, createPost }
