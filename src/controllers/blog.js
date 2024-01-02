const { Blog } = require("../db/index");

async function readAllBlogs(req, res) {
  const allBlogs = await Blog.find({});
  res.status(200).json({ allBlogs });
}

async function createNewBlog(req, res) {
  const { title, content, author } = req.body;
  try {
    const newBlog = await new Blog({ title, author, content });
    await newBlog.save();
    res.status(201).json({ newBlog });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
}

module.export = { readAllBlogs, createNewBlog };