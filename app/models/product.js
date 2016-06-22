
// grab the mongoose module
var mongoose = require('mongoose');

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Product', {
    name : { type: String, default: '' },
    description : { type: String, default: '' },
});