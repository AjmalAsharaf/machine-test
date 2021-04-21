const Product=require('../models/product')
const Category=require('../models/category')
const Subcategory=require('../models/subcategory')

function productController(){

    return{
        async index(req,res){
            const category= await Category.find()
            const subcategory= await Subcategory.find()
            const product= await Product.find()
            return res.render('products',{category:category,subcategory:subcategory,product:product})
        },
        async addProduct(req,res){
            var {category,subcategory,product,price}=req.body
            var product=product.toLowerCase()
            
            
            var categoryUrl= await Category.findById(category)
            var subcategoryUrl= await Subcategory.findById(subcategory)
           
            
            var url= categoryUrl.url+subcategoryUrl.url+'/'+product
            
            
            Product.exists({product:product},(err,result)=>{
                if(result){
                    return res.redirect('/product')
                }
            })
           
            const productItem= new Product({
                product:product,
                url:url,
                price:price
            })
            productItem.save().then((product)=>{
                return res.redirect('/product')
            }).catch(err=>{
                return res.redirect('/product')
                
            })
        },
        async getProduct(req,res){
            var url=req.get('host')
            const params=req.params
            url+=params['0']
            const product=await Product.findOne({url:url})
            if(product) return res.render('product-view',{product:product})
            
            return res.render('error')
           
        },
        async addMoresub(req,res){
            console.log('paramas id',req.body)
            const {subCate,id} = req.body
            var product=await Product.findById(id)
            var newUrl=product.url.split('/')
            newUrl.splice(newUrl.length-1,0,subCate)
            newUrl=newUrl.join('/')
            console.log(newUrl)
            Product.updateOne({_id:id},{url:newUrl},(err,data)=>{
                if(err){
                    return res.redirect('/product')
                }
                return res.redirect('/product')
            })
           
            
        },
       async addMoreSubView(req,res){
            var product=await Product.findById(req.params.id)
            return res.render('addMoreSub',{product:product})
        }
    }
}

module.exports=productController