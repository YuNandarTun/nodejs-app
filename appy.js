

const express = require ('express');
const path = require('path');
const bodyParser = require('body-parser');

const hbs = require("hbs");

const appy = express();

// appy.engine('hbs', handlebars({
//   layoutDir: 'views/layouts',
//   defaultlayout: 'main-layouts.hbs',
// }));

appy.set('view engine','ejs'); //global configuration value
appy.set('views','views');

const adminRoutes = require('./route/admin');
const shopRouter = require ('./route/shop');
const errorRouter = require('./controllers/error');

appy.use(bodyParser.urlencoded({extended:false}));
appy.use(express.static(path.join(__dirname,'public')));

appy.use('/admin', adminRoutes);
appy.use(shopRouter);

appy.use(errorRouter.get404);

appy.listen(3002); 