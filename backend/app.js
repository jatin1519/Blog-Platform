const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/blogdb");

const Blog = mongoose.model("Blog", {
 title: String,
 content: String
});

app.get("/api/blogs", async (req,res)=>{
 const blogs = await Blog.find();
 res.json(blogs);
});

app.post("/api/blogs", async (req,res)=>{
 const blog = new Blog(req.body);
 await blog.save();
 res.json(blog);
});

app.listen(5000, ()=>{
 console.log("Backend running");
});
