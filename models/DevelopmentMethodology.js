const mongoose = require ('mongoose');
const DevelopmentMethodology = new mongoose.Schema({
    devMethodDescription:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now 
    }
});

module.exports = DevelopmentMethodology = mongoose.model('developmentmethodology', DevelopmentMethodology);