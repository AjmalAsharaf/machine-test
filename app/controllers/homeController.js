const Category=require('../models/category')
const Subcategory=require('../models/subcategory')

function homeController(){
    return{
       async index(req,res){
            const categories= await Category.find()
            
            if(categories.length>0){
              return  res.render('home',{categories:categories})
            }
            return res.render('home')
            
        },
        addCategory(req,res){
            var {category} = req.body
            const data = category.toLowerCase()
            Category.exists({category:data},(err,result)=>{
                if(result){
                    return res.redirect('/')
                }
            })
            host=req.get('host')

            const categoriess= new Category({
                category:data,
                url:host+'/'+data
            })
            categoriess.save().then((categoriess)=>{
                return res.redirect('/')
            }).catch((err)=>{
                return res.redirect('/')
            })
        },
       async showSub(req,res){
            const subcat=await Subcategory.find()
           
            if(subcat.length>0){
                return res.render('subcat',{subcat:subcat})
            }
            return res.render('subcat')
            

        },
        addSub(req,res){
            var {subCat}=req.body
            const data = subCat.toLowerCase()
            Subcategory.exists({subCategory:data},(err,result)=>{
                if(result){
                    return res.redirect('/subcat')
                }
            })
            const subCategory= new Subcategory({
                subCategory:data,
                url:'/'+data
            })
            subCategory.save().then((subcat)=>{
                return res.redirect('/subcategory')
            }).catch(err=>{
                return res.render('/subcategory')
            })
            

        },
    }
}

module.exports=homeController