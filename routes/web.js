const homeController=require('../app/controllers/homeController')
const productController=require('../app/controllers/productController')

function initRoutes(app){
    
    app.get('/',homeController().index)
    app.post('/category',homeController().addCategory)
    app.get('/subcategory',homeController().showSub)
    app.post('/subcategory',homeController().addSub)

    app.get('/product',productController().index)
    app.post('/addProduct',productController().addProduct)

    
    app.get('/addMoreSub/:id',productController().addMoreSubView)
    app.post('/addMoreSub',productController().addMoresub)

    app.get('*',productController().getProduct)
   
}
module.exports=initRoutes