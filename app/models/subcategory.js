const mongoose=require('mongoose')

const Schema= mongoose.Schema

const subCategorySchema=new Schema({
    subCategory:{type:String,required:true,unique:true},
    url:{type:String,required:true},
    
})

module.exports=mongoose.model('Subcategory',subCategorySchema)