/**
 * Modules
 */
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose       = require('mongoose');

var db = require('./config/db');
var port = process.env.PORT || 8080;

/**
 * MongoDB Configuration
 */
mongoose.connect(db.url);

/**
 * Miscellaneous Server Configuration.
 */
// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

/**
 * Routing Configuration
 */
require('./app/middleware/logger')(app);

require('./app/routes/main')(app);
require('./app/routes/product-line')(app);
require('./app/routes/product')(app);

/**
 * App Startup
 */
app.listen(port);

// Log successful startup.
console.log('AMC Power NodeJS Server started at ' + port);

// Expose the application.
exports = module.exports = app;  