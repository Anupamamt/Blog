const mongoose=require('mongoose')

//schema definition
const Schema=mongoose.Schema;

//modelling
const BLOGS=new Schema({
    blogName:String,
    postDate:String,
    postTitle:String,
    description:String,
    commentsuser:String,
    comment:String
})

const blog=mongoose.model('blog',BLOGS)

module.exports=blog