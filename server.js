const express = require('express')
const app = express()
const ejs=require('ejs')
const path=require('path')
const expressLayout=require('express-ejs-layouts')
const mongoose = require('mongoose')

const url='mongodb+srv://ajmal:123@cluster0.7dbnu.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(url,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:true})
const connection= mongoose.connection;
connection.once('open',()=>{
    console.log('Database connected..')
}).catch(err=>{
    console.log('Db connection failed...')
})
//Assets
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//set Template engine
app.use(expressLayout)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')



// Route
require('./routes/web')(app)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})