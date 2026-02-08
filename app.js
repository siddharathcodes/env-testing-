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

app.get('/hello',(req,res)=>{
    res.json({
        message: "omg i made  my frist blatakari baba"
    })
})

app.post("/hello",upload.single("image"), async(req,res) =>{
    const {title,subtitle,discription,image,}= req.body;
    await Blog.create({
    title,
    subtitle,
    discription,
    image,
   })
    res.json({
        message:"you  made first get api"
    })
})



app.listen(process.env.PORT,(req, res)=>{
  console.log("node server is created");
})



