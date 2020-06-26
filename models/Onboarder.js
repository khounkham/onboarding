const mongoose = require ('mongoose');
const OnboarderSchema = new mongoose.Schema({
        user:{
          type: mongoose.Schema.Types.ObjectId,
          ref:'user'
        }, 
        projectid:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'projectprofile'
          },
        onboarderName:{
        type: String,
        required: true
        },
        onboarderEmail:{
        type: String,
        required: true
        },
        managementtoolsScore:[
                  {tName:{
                    type: String,
                    required: true
                    },
                  tScore:{
                    type: String,
                    required: true
                    }
                  }],
        developmentmethodology:[
                  {mName:{
                    type: String,
                    required: true
                    },
                  mScore:{
                    type: String,
                    required: true
                    }
                  }
                ],
        programinglanguage:[
                  {pName:{
                    type: String,
                    required: true
                    },
                    pScore:{
                    type: String,
                    required: true
                    }
                  }
                ],
        framework:[
                  {fName:{
                    type: String,
                    required: true
                    },
                    fScore:{
                    type: String,
                    required: true
                    }
                  }
                ],
        database:[
                  {dName:{
                    type: String,
                    required: true
                    },
                    dScore:{
                    type: String,
                    required: true
                    }
                  }
                ],
        developmenttechnique:[
                  {devName:{
                    type: String,
                    required: true
                    },
                    devScore:{
                    type: String,
                    required: true
                    }
                  }
          ],
        // Assessment 11 goals
        companyCultureScore:
                  {
                  type: String,
                  required: true
                  },
        teamNormScore:{
              type: String,
              required: true
              },
        ownRoleResponbilityScore:{
              type: String,
              required: true
              },
        ownRoleResponbilityScore:{
              type: String,
              required: true
                },
        otherResponsibilityScore:
              {
              type: String,
              required: true
              },
        workTodoScore:
              {
              type: String,
              required: true
              },
        codeAndTestScore:
              {
              type: String,
              required: true
              },
        standardWorkQualityScore:
              {
              type: String,
              required: true
              },
        agileMindsetScore:
              {
              type: String,
              required: true
              },
        agileArtefactTechScore:
              {
              type: String,
              required: true
              },
        projectStructureScore:
              {
              type: String,
              required: true
              },
        projectDomainTerminologyScore:
              {
              type: String,
              required: true
              },
        date:{
            type:Date,
            default: Date.now 
            } 
});
module.exports = Onboarder = mongoose.model('onboarder', OnboarderSchema);