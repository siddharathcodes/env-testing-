require('dotenv').config();
const express = require("express");
const  createdatabase = require('./database/index.js');
 createdatabase();
const app = express();
app.use(express.json());

app.get('/hello',(req,res)=>{
    res.json({
        message: "omg i made  my frist blatakari baba"
    })
})

app.post('/hello',(req,res)=>{
    console.log(req.body);
    res.json({
        message: "omg i made  my frist server"
    })
})




app.listen(process.env.PORT,(req, res)=>{
  console.log("node server is created");
})



