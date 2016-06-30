

module.exports = function(app) {

    var Product = require('../models/product');


    /*
     * Route to the homepage.
     */
    app.get('/', function(req, res) {
        res.sendfile('./public/views/index.html');
    });


    app.get('/api/v1/products', function(req, res) {

        Product.find(function(err, products) {

            if (err) {
                res.send(err);
            }

            res.json(products);
        });
    });

    app.post('/api/v1/product', function(req, res) {

        var product = new Product();
        product.name = req.body.name;
        product.description = req.body.description;

        product.save(function(err) {

            if (err) {
                res.send(err);
            }

            res.json({ message: 'Product Created!' });
        });

    });

    //var apiVersion = '/api/v1'
    //var products = require('./product.js');
    //var productLines = require('./product-line.js');
    //
    //console.log(productLines);
    //
    //function prependApiVersion(route) {
    //    return apiVersion + route;
    //}
    //
    ///*
    // * Products
    // */
    //app.get(prependApiVersion('/api/v1/products'), products.getAll);
    ////app.post(prependApiVersion('/api/v1/product/'), products.create);
    ////app.put(prependApiVersion('/api/v1/product/:id'), products.update);
    ////app.delete(prependApiVersion('/api/v1/product/:id'), products.delete);
    //
    ///*
    // * Product Lines
    // */
    ////app.get(prependApiVersion('/api/v1/product-lines'), productLines.getAll);
    ////app.post(prependApiVersion('/api/v1/product-line/'), productLines.create);
    ////app.put(prependApiVersion('/api/v1/product-line/:id'), productLines.update);
    ////app.delete(prependApiVersion('/api/v1/product-line/:id'), productLines.delete);


};