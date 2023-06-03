const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");

// Post Routes
router.get("/:id", postsController.getPost);
router.post("/createPost", postsController.createPost);
router.put("/likePost/:id", postsController.likePost);
router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;