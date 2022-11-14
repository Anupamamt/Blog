// const{urlencoded}=require('express')
const express=require('express')
const cors=require('cors')
const logger=require('morgan')
const app=new express()
app.use(cors())
app.use(express.json())
// app.use(urlencoded({extended:true}))

app.use(logger('dev'))

const PORT=3000;


const path = require('path');
app.use(express.static('./dist/blog'))


const mongoose=require("mongoose")
mongoose.connect('mongodb+srv://anupamamt:anupama2000@cluster0.nfdclmf.mongodb.net/BlogDB?retryWrites=true&w=majority')
.then(()=>{
    console.log("MY mongodb is connected succesfully")
})
.catch(error=>{
    console.log('Connection error'+error)
})

const BLOG_DETAILS=require('./models/model')




app.get('/api/aboutMaths',async(req,res)=>{
    try{
     const list=await BLOG_DETAILS.find()
     res.send(list)
     
    }catch(error){
      console.log(error)
    }
  })


  app.get('/api/aboutMaths/comments',async(req,res)=>{
    try{
     const list=await BLOG_DETAILS.find()
     res.send(list)
     
    }catch(error){
      console.log(error)
    }
  })


  app.post('/api/aboutMaths',async(req,res)=>{
    try{
   let item={
    blogName:req.body.blogName,
    postDate:req.body.postDate,
    postTitle:req.body.postTitle,
    description:req.body.description,
    commentsuser:req.body.commentsuser,
    comment:req.body.comment
}

const newblog=new BLOG_DETAILS(item)//to check incoming data
const saveblog=await newblog.save()
res.send(saveblog)

  }catch(error){
    console.log(error)
  }
})

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/blog/index.html'));
 });

app.listen(process.env.PORT || 3000,()=>{
    console.log("The app is listening to port 3000");
})

