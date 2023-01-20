const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

const path = require('path');
//const rootDir = require('../helpfun/path');
//const products = [];

router.get('/add-product', adminController.getAddProducts); //admin/add-product => GET

router.get('/productss',adminController.getProducts); // /admin/products

router.post('/add-product', adminController.postAddProduct); //admin/add-product => POST

//exports.routes = router; 
//exports.products = products;

module.exports = router;

