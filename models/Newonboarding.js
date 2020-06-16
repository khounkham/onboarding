const mongoose = require ('mongoose');
const NewonboardingSchema = new mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
  },  
  companyprofile:[
      { companyname:{
        type: String,
        required: true
        },
        companydescription:{
        type: String
        },
        cquestionanswer:[
                  {cquestion:{
                    type: String,
                    required: true
                    },
                  canswer:{
                    type:String
                    }
                  }], 
        teamprofile:[{
                  teamname:{
                  type: String,
                  required: true
                  },
                  teamdescription:{
                  type: String
                  },
                  tquestionanswer:[{
                            tquestion:{
                            type: String,
                            required: true
                            },
                            tanswer:{
                            type:String
                            }
                  }]
                }]}],
    date:{
        type:Date,
        default: Date.now 
    } 
});
module.exports = Newonboarding = mongoose.model('newonboarding', NewonboardingSchema);