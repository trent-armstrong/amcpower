
// grab the mongoose module
var mongoose = require('mongoose');

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Product', {
    name : { type: String, default: '' },
    description : { type: String, default: '' },
    outputs: {
        min: {
            type: Number, default: 0
        },
        max: {
            type: Number, default: 0
        }
    },
    outputVoltage: { type: String, default: '' },
    outputPower: { type: String, default: '' },
    operatingTemp: { type: String, default: ''}
});