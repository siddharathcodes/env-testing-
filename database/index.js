const mongoose = require('mongoose');

async function createdatabase(){
   await mongoose.connect(process.env.MONGODB_URL);
    console.log('database has been connected');
}


module.exports  = createdatabase;