require('dotenv').config();

const express = require("express");
const app = express();
//this is for databse connection 
const  createdatabase = require('./database/index.js');
 createdatabase();

 const Blog = require("./model/blogModel.js");

 //this for file handling
 const {multer,storage} = require('./middleware/multerConfig.js')
 const upload = multer({storage:storage})

app.use(express.json());

const fs = require('fs')


//create routes post
app.post("/hello",upload.single("image"), async(req,res) =>{
    const {title,subtitle,discription}= req.body;
    const filename = req.file.filename;
    if(!file){
      return  res.json({
            message : "image is reuired"
        })
    }
    console.log(req.body)
    console.log(req.file.filename)
    await Blog.create({
    title,
    subtitle,
    discription,
    image : filename
   })
    res.json({
        message:"api hit succesfully"
    })
})


//get all 

app.get('/hello',async (req,res)=>{
    const blogs = await Blog.find()
    res.status(200).json({
        message : "blogs fetched success",
        data : blogs
    })
})

//get single
app.get('/hello/:id',async (req,res)=>{
   const id = req.params.id
 const blog =   await Blog.findById(id)
 console.log("ID received:", id);


 if(!blog){
   return  res.status(400).json({
        message: "data  i snot found "
    })
   
}

 res.status(200).json({
    data: blog
    })

})


//static access of this folder 
app.use(express.static("./storage"))


//delete routes
app.delete("/hello/:id",async(req,res)=>{
    const id = req.params.id
    const blog = await Blog.findById(id)
    const imgnum = blog.image

    //delte image also
    fs.unlink("./storage/" + imgnum,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("file deleted successfully")
        }
    })

    await Blog.findByIdAndDelete(id)
    res.status(200).json({
        message : "Data deleted successfully"
    
    })
})

//update routes
app.patch("/hello/:id",async (req,res)=>{
    const id = req.params.id
    const {title, subtitle,discription} = req.body
   await Blog.findByIdAndUpdate(id,{
        title : title,
        subtitle : subtitle,
        discription : discription
    })
    res.status(200).json({
        message : "Blog Updated successful"
    })

})


app.listen(process.env.PORT,(req, res)=>{
  console.log("node server is created");
})



