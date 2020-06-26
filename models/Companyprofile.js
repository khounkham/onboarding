const mongoose = require ('mongoose');
const CompanyprofileSchema = new mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
  },  
  companyname:{
    type: String,
  },
  companydescription:{
    type: String
  },
  managementtool:[
                  {toolName:{
                    type: String,
                    }
                  }],
  developmentmethodology:[
                  {methodologyName:{
                    type: String,
                    }
                  }],
  date:{
      type:Date,
      default: Date.now 
    } 
});
module.exports = Companyprofile = mongoose.model('companyprofile', CompanyprofileSchema);