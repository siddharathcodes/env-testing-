const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title :{
        type : String,
        required :true,
    },
    subtitle :{
        type :String,
    },

    description:{
        type : String,
    },
    image :{
        type : String,
    }

    
})

const BLOG = mangoose.Schema('BLOG',"blogSchema");

modeule.export = BLOG;