const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    match: /^.*@.*\..*$/,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 3
  },
  name: {
    type: String,
    minlength: 3
  }
})

module.exports = mongoose.model("users", userSchema)
