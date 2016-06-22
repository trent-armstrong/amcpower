
var ProductLine = require('../models/product-line');

module.exports = function(app) {

    app.get('/api/productline', function(req, res) {

        ProductLine.find(function(err, productLines) {

            if (err) {
                res.send(err);
            }

            res.json(productLines);
        });
    });

    app.post('/api/productline', function(req, res) {

        var productLine = new ProductLine();
        productLine.name = req.body.name;
        productLine.description = req.body.description;

        productLine.save(function(err) {

            if (err) {
                res.send(err);
            }

            res.json({ message: 'Product Line Created!' });
        });

    });
};