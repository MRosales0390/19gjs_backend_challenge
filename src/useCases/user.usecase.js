const createError = require("http-errors")
const bcrypt = require("bcrypt")
const User = require("../models/user.model")
const jwt = require("../lib/jwt.lib")

const getById = (id) => {
  return User.findById(id)
}

const login = async (email, textPlainPassword) => {
  // validar que exista el usuario
  const user = await User.findOne({ email })

  // Falla correo
  if (!user) throw createError(400, "Invalid data")

  const isValidPassword = await bcrypt.compare(textPlainPassword, user.password)
  // Falla password
  if (!isValidPassword) throw createError(400, "Invalid data")

  const token = jwt.sign({ id: user._id })

  return token
}

const create = async (userData) => {
  // Lo del signup, crear cuenta
  const hash = await bcrypt.hash(userData.password, 10)
  userData.password = hash
  return await User.create(userData)
}

module.exports = { getById, create, login }
