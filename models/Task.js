const mongoose = require ('mongoose');
const TaskSchema = new mongoose.Schema({
    taskDescription:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now 
    }
});
module.exports = Task = mongoose.model('task', TaskSchema);