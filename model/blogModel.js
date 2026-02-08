const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Blog = mongoose.model("Blog", blogSchema); // ✅ correct

module.exports = Blog; // ✅ correct
