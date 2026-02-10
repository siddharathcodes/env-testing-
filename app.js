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



app.post("/hello",upload.single("image"), async(req,res) =>{
    const {title,subtitle,discription,image,}= req.body;
    const filename = req.file.filename;
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


app.get('/hello',async (req,res)=>{
    const blogs = await Blog.find()
    res.status(200).json({
        message : "blogs fetched success",
        data : blogs
    })
    

    
})

app.listen(process.env.PORT,(req, res)=>{
  console.log("node server is created");
})



