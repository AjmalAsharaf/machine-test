const mongoose=require('mongoose')
const Schema= mongoose.Schema

const productShema=new Schema({
    product:{type:String,unique:true,required:true},
    url:{type:String,required:true},
    price:{type:Number,reqired:true}
    
})

module.exports=mongoose.model('Product',productShema)