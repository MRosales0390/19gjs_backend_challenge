const express = require("express")
const userMethods = require("../useCases/user.usecase")

const router = express.Router()

router.post("/", async (request, response) => {
  try {
    const user = await userMethods.create(request.body)
    response.status(201)
    response.json({
      success: true,
      data: {
        user
      }
    })
  } catch (error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.get("/:id", async (request, response) => {
  const { id } = request.params
  try {
    const user = await userMethods.getById(id)
    response.json({
      success: true,
      data: {
        user
      }
    })
  } catch (error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router
