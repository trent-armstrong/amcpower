// app/routes.js

//var ProductLine = require('./models/product-line');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    //app.get('/api/productlines', function(req, res) {
    //    // use mongoose to get all nerds in the database
    //    ProductLine.find(function(err, productLines) {
    //
    //        // if there is an error retrieving, send the error.
    //        // nothing after res.send(err) will execute
    //        if (err) {
    //            res.send(err);
    //        }
    //
    //        res.json(productLines);
    //    });
    //});
    //
    //app.post('/api/productlines', function(req, res) {
    //
    //    var productLine = new ProductLine();      // create a new instance of the Bear model
    //    productLine.name = req.body.name;  // set the bears name (comes from the request)
    //    productLine.description = req.body.description;  // set the bears name (comes from the request)
    //
    //
    //    // save the bear and check for errors
    //    productLine.save(function(err) {
    //        if (err) {
    //            res.send(err);
    //        }
    //
    //        res.json({ message: 'Product Line Created!' });
    //    });
    //
    //});

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

};