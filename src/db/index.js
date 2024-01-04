require("dotenv").config();
const mongoose = require("mongoose");

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.log(err);
    });

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
    }
);

// const UserModel = mongoose.model("users", UserSchema);
const Blog = mongoose.model("Blog", blogSchema);

module.exports = { Blog };
