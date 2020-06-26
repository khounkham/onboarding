const mongoose = require ('mongoose');
const ProjectprofileSchema = new mongoose.Schema({
companyid:{
  type:mongoose.Schema.Types.ObjectId,
  ref:'companyprofile'
},
projectname:{
    type: String,
    required: true
    },
projectdescription:{
    type: String
    },
programinglanguages:[{
                    programingname:{
                    type: String,
                    required: true
                    }
                    }],
       frameworks:[{
                    frameworkname:{
                    type: String,
                    required: true
                    }
                    }],
          databases:[{
                    databasename:{
                    type: String,
                    required: true
                    }
                    }],
          developmenttechniques:[{
                    techname:{
                    type: String,
                    required: true
                    }
                    }],
user:{
  type:mongoose.Schema.Types.ObjectId,
  ref:'user'
}, 
date:{
type:Date,
default: Date.now 
} 
});
module.exports = Projectprofile = mongoose.model('projectprofile', ProjectprofileSchema);