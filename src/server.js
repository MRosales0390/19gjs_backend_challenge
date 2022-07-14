const express = require("express")
const app = express()

const postRouter = require("./routes/post.route")
const userRouter = require("./routes/user.route")

app.use(express.json())

app.use("/user", userRouter)
app.use("/", postRouter)

module.exports = app
