const mongoose = require ('mongoose');
const ProjectManagementTool = new mongoose.Schema({
    toolDescription:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now 
    }
});

module.exports = ProjectManagementTool = mongoose.model('projectmanagementtool', ProjectManagementTool);