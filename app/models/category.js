const mongoose=require('mongoose')

const Schema= mongoose.Schema

const categorySchema= new Schema({
    category:{type:String,required:true,unique:true},
    url:{type:String,required:true}
})

module.exports=mongoose.model('Category',categorySchema)