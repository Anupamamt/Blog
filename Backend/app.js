// const{urlencoded}=require('express')
const express=require('express')
const cors=require('cors')
const logger=require('morgan')
const app=new express()
app.use(cors())//connect frontend and backend seemlessly
app.use(express.json())
// app.use(urlencoded({extended:true}))
//recieve data from backend.otherwise undefined
//images and files
app.use(logger('dev'))

const PORT=3000;



// Task2: create mongoDB connection 
const mongoose=require("mongoose")
mongoose.connect('mongodb+srv://anupamamt:anupama2000@cluster0.nfdclmf.mongodb.net/BlogDB?retryWrites=true&w=majority')
.then(()=>{
    console.log("MY mongodb is connected succesfully")
})
.catch(error=>{
    console.log('Connection error'+error)
})

const BLOG_DETAILS=require('./models/model')


// app.get('/aboutMaths',async(req,res)=>{
//     try{
// let blogName=aboutMaths;
// const singlestudent=await BLOG_DETAILS.findOne(blogName)
// res.send(singlestudent)
//     }catch(error){
//         console.log(error)
//     }
// })

app.get('/aboutMaths',async(req,res)=>{
    try{
     const list=await BLOG_DETAILS.find()
     res.send(list)
     
    }catch(error){
      console.log(error)
    }
  })


  app.get('/aboutMaths/comments',async(req,res)=>{
    try{
     const list=await BLOG_DETAILS.find()
     res.send(list)
     
    }catch(error){
      console.log(error)
    }
  })

app.delete('/aboutMaths/:id',async(req,res)=>{
    try{
        let id=req.params.id
const deletestudent=await BLOG_DETAILS.findByIdAndDelete(id)
res.send(deletestudent)
    }catch(error){
        console.log(error)
    }
})
  app.post('/aboutMaths',async(req,res)=>{
    try{
   let item={
    blogName:req.body.blogName,
    postDate:req.body.postDate,
    postTitle:req.body.postTitle,
    description:req.body.description,
    commentsuser:req.body.commentsuser,
    comment:req.body.comment
}

const newstudent=new BLOG_DETAILS(item)//to check incoming data
const savestudent=await newstudent.save()
res.send(savestudent)

  }catch(error){
    console.log(error)
  }
})

app.listen(PORT,()=>{
    console.log("The app is listening to port 4200");
})

