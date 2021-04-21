var {subCate,id}=req.body
            
console.log('subcat',subCate)
var product=await Product.findById(id)
var newUrl=product.url.split('/')
newUrl.splice(newUrl.length-1,0,subCate)
 newUrl.join('/')
console.log()

 console.log(newUrl)