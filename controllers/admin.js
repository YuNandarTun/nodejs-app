const Product = require('../models/product');

exports.getAddProducts = (req, res, next)=>{
    res.render('admin/add-products',
     {pageTitle: "Add Product",
      path:"/admin/add-product",
      mainCSS: true,
      productCSS: true,
      formsCSS : true,
      activeProduct: Boolean,
  });
  //  res.sendFile(path.join(__dirname,"../",'views','add-products.html'));

};

exports.postAddProduct = (req, res, next)=>{
    //   console.log(req.body);
   // products.push({titile: req.body.title});
   const title = req.body.title;
   const imageUrl = req.body.imageUrl;
   const price = req.body.price;
   const description = req.body.description;
   const product = new Product(title,imageUrl,description,price);
   product.save();
       res.redirect('/');
};

exports.getProducts = (req, res, next)=>{
    Product.fetchAll((products)=>{
        res.render('admin/productss',{
        prods: products,
        pageTitle:'Admin Products',
        path:'/admin/products'
        });
    });
};
