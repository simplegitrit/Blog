const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://harshitamore16:tj9ke2v8o59Ngzae@cluster0.p1hfn8w.mongodb.net/blog-backend').then(()=>{
    console.log("mongo connected");
})

const blogSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    },
  );

// const UserModel = mongoose.model("users", UserSchema);
const Blog = mongoose.model("Blog", blogSchema);

module.exports = { Blog };
