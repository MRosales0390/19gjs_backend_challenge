const express = require("express")
const cors = require("cors")
const app = express()

const postRouter = require("./routes/post.route")
const userRouter = require("./routes/user.route")
const authRouter = require("./routes/auth.route")

app.use(express.json())
app.use(cors())

app.use("/login", authRouter)
app.use("/user", userRouter)
app.use("/", postRouter)

module.exports = app
