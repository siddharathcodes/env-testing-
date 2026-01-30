const mongoose = require('mongoose');

async function createdatabase(){
   await mongoose.connect('mongodb+srv://siddharathcodes_db_user:WFXZMDZGxocirPRG@cluster0.cjsxxvf.mongodb.net/?appName=Cluster0');
    console.log('database has been connected');
}


module.exports  = createdatabase;