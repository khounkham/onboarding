const mongoose = require ('mongoose');
const GoalSchema = new mongoose.Schema({
    goalDescription:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now 
    }
});
module.exports = Goal = mongoose.model('goal', GoalSchema);