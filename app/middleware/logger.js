
module.exports = function(app) {

    app.use(function(req, res, next) {

        var timeStamp = (new Date()).toString();

        console.log(timeStamp + ' - ' + req.originalUrl);

        next();
    });
};