const express = require("express")
const auth = require("../middlewares/auth.middleware")
const postMethods = require("../useCases/post.usecase")

const router = express.Router()



router.post("/createPost", async (request, response) => {
  try {
    const createdPost = await ( postMethods.createPost (request.body) )
    response.json({
      success: true,
      data: { createdPost }
    })
  }catch(error) {
    response.status(error.status || 500)
    response.json({
      success: false,
      message: error.message
        })
  } 

})

router.use(auth)
 

router.patch("/:id", auth, async (request, response) => {
  try {
    const { id } = request.params
    const post = await postMethods.update(id, request.body)

    response.json({
      success: true,
      data: {
        post
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.delete("/:id", auth, async (request, response) => {
  try {
    const { id } = request.params
    const post = await postMethods.remove(id)

    response.json({
      success: true,
      data: {
        post
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router
