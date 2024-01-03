const express = require("express");
const router = express.Router();
const { readAllBlogs, createNewBlog } = require("../controllers/blog");

router.get("/", readAllBlogs);
router.post("/newBlog", createNewBlog);

// delete and update

// router.delete("/deleteBlog/:blogId", deleteblog);
// router.put("/updateBlog/:blogId", updateblog);

module.exports = router;
