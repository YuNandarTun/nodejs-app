//const products = [];
const Product = require('../models/product');

exports.getProducts = (req, res, next)=>{
   // const products = Product.fetchAll();
    //const products = adminData.products;
    Product.fetchAll((products)=>{
        res.render('shop/productlist',{
            prods: products, 
            pageTitle: 'All Products',
            path: "/products",
            hasProduct:products.length > 0,
            mainCSS: true, 
            activeShop : true,
        });
    });
    //console.log(adminData.products);
   // res.sendFile(path.join(__dirname,'../','views','shops.html'));
    //console.log('in the next middleware');
    //res.send('<h1>Hello my baby</h1>');
};

exports.getIndex = (req, res, next)=>{
    // const products = Product.fetchAll();
     //const products = adminData.products;
     Product.fetchAll((products)=>{
         res.render('shop/index',{
             prods: products, 
             pageTitle: 'Shop',
             path: "/",
             hasProduct:products.length > 0,
             mainCSS: true, 
             activeShop : true,
         });
     });
 };

 exports.getCart = (req, res, next)=>{
    res.render('shop/cart',{
        path: '/cart',
        pageTitle: 'Your Cart'
    })
 };

 exports.getOrders = (req, res, next)=>{
    res.render('shop/orders',{
        path: '/orders',
        pageTitle: 'Your Orders'
    })
 };

 exports.getCheckout = (req, res, next)=>{
    res.render('shop/checkout',{
        path: '/checkout',
        pageTitle: 'Checkout'
    })
 };

 exports.getProduct = (req,res, next) => {
    const prodId = req.params.productId;
    Product.findbyId(prodId,(product)=> {
        res.render('shop/product-details',{
        product: product,
        path : '/products',
        pageTitle: product.title})
     // console.log(product);  
    })
    //res.redirect('/');
    //console.log(prodId);
    //res.redirect('/');
 }

 
 //https://m.media-amazon.com/images/I/41stpPRWFtL._AC_SX466_.jpg