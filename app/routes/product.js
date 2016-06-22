
var Product = require('../models/product');

module.exports = function(app) {

    app.get('/api/product', function(req, res) {

        Product.find(function(err, products) {

            if (err) {
                res.send(err);
            }

            res.json(products);
        });
    });

    app.post('/api/product', function(req, res) {

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
};