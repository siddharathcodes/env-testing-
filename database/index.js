const mongoose = require('mongoose');

async function createdatabase(){
   await mongoose.connect(MONGODB_URL);
    console.log('database has been connected');
}


module.exports  = createdatabase;