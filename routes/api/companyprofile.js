const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const auth= require('../../middleware/auth');
const Companyprofile= require('../../models/Companyprofile');
//const Profile= require('../../models/Profile');
const User= require('../../models/User');

//@route    POST api/companyprofile
//@desc     Create or update company profile
//@access Private
router.post('/', [auth, [
    check ('companyname', 'Company name is required').not().isEmpty()
    ],
    [
    check ('companydescription', 'Company description is required').not().isEmpty()
    ]
    ],
async (req,res) => {
    const errors =validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {
        companyname,
        companydescription,
    } = req.body;
// build company profile object
    const companyprofileFields = {};
    companyprofileFields.user = req.user.id;
    if(companyname) companyprofileFields.companyname= companyname;
    if(companydescription) companyprofileFields.companydescription= companydescription;
    try {
        let companyprofile = await Companyprofile.findOne({user:req.user.id, companyname});
        if(companyprofile){
            //Update
            companyprofile = await Companyprofile.findOneAndUpdate(
                {user:req.user.id, companyname},
                {$set:companyprofileFields},
                {new:true}
            );
          return res.json(companyprofile)
        }
            //Create
            companyprofile = new Companyprofile(companyprofileFields)
            await companyprofile.save();
            res.json(companyprofile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
        
    }
});
//@route    PUT api/companyprofile/managementtools
//@desc     Add management tool to the company profile
//@access Private
router.put('/managementtool', [auth,[
    check ('toolName', 'Management tool is required')
]], async (req,res)=>{
    const errors =validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json ({errors:errors.array()});
    }
    const {
        toolName
    } =req.body;
    const newManagementTool ={
        toolName
    }
    try {
        const companyProfile = await Companyprofile.findOne({user:req.user.id});
            // Add
          companyProfile.managementtool.unshift(newManagementTool);
          await companyProfile.save();
          res.json(companyProfile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})
//@route    DELETE api/companyprofile/managementtools/:tool_id
//@desc     Delete management tool from the company profile
//@access Private
router.delete('/managementtool/:tool_id', auth, async (req,res)=>{
    try {
        const companyProfile = await Companyprofile.findOne({user:req.user.id});
        //Get remove index
        const removeIndex = companyProfile.managementtool.map(item =>item.id).indexOf(req.params.tool_id);
          companyProfile.managementtool.splice(removeIndex,1);
          await companyProfile.save();
          res.json(companyProfile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route    PUT api/companyprofile/developmentmethod
//@desc     Add Development Methodology to the company profile
//@access Private
router.put('/developmentmethod', [auth,[
    check ('methodologyName', 'Development methodology is required')
]], async (req,res)=>{
    const errors =validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json ({errors:errors.array()});
    }
    const {
        methodologyName
    } =req.body;
    const newDevelopmentMethod ={
        methodologyName
    }
    try {
        const companyProfile = await Companyprofile.findOne({user:req.user.id});
            // Add
          companyProfile.developmentmethodology.unshift(newDevelopmentMethod);
          await companyProfile.save();
          res.json(companyProfile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})
//@route    DELETE api/companyprofile/developmentmethod/:method_id
//@desc     Delete management tool from the company profile
//@access Private
router.delete('/developmentmethod/:method_id', auth, async (req,res)=>{
    try {
        const companyProfile = await Companyprofile.findOne({user:req.user.id});
        //Get remove index
        const removeIndex = companyProfile.developmentmethodology.map(item=>item.id).indexOf(req.params.method_id);
          companyProfile.developmentmethodology.splice(removeIndex,1);
          await companyProfile.save();
          res.json(companyProfile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
module.exports = router;