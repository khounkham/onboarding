const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const auth= require('../../middleware/auth');
const Projectprofile= require('../../models/Projectprofile');
const User= require('../../models/User');
//@route    POST api/projectprofile
//@desc     Create or update project profile
//@access Private
router.post('/', [auth, [
    check ('projectname', 'project name is required').not().isEmpty()
    ],
    [
    check ('projectdescription', 'Project description is required').not().isEmpty()
    ]
    ],
async (req,res) => {
    const errors =validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {
        companyid,
        projectname,
        projectdescription
    } = req.body;
// build project profile object
    const projectprofileFields = {};
    projectprofileFields.user = req.user.id;
    //projectprofileFields.companyid= req.companyid.id
    if(companyid) projectprofileFields.companyid = companyid;
    if(projectname) projectprofileFields.projectname= projectname;
    if(projectdescription) projectprofileFields.projectdescription= projectdescription;
    try {
        let projectprofile = await Projectprofile.findOne({user:req.user.id, companyid});
        if(projectprofile){
            //Update
            projectprofile = await Projectprofile.findOneAndUpdate(
                {user:req.user.id, companyid},
                // {companyprofile: req.companyprofile.id},
                {$set:projectprofileFields},
                {new:true}
            );
          return res.json(projectprofile)
        }
            //Create
            projectprofile = new Projectprofile(projectprofileFields)
            await projectprofile.save();
            res.json(projectprofile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
        
    }
});

//@route    PUT api/projectprofile/programinglanguages
//@desc     Add programinglanguages to the project profile
//@access Private
router.put('/programinglanguages', [auth,[
    check ('programingname', 'Programing language is required')
]], async (req,res)=>{
    const errors =validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json ({errors:errors.array()});
    }
    const {
        programingname,
        companyid
    } =req.body;
    const newProgramingLanguage ={
        programingname
    }
    try {
        const projectProfile = await Projectprofile.findOne({user:req.user.id, companyid});
            // Add
          projectProfile.programinglanguages.unshift(newProgramingLanguage);
          await projectProfile.save();
          res.json(projectProfile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})
//@route    DELETE api/projectprofile/programinglanguages/:pro_id
//@desc     Delete management tool from the company profile
//@access Private
router.delete('/programinglanguages/:pro_id', auth, async (req,res)=>{
    const {
        companyid
    } =req.body;
    try {
        const projectProfile = await Projectprofile.findOne({user:req.user.id});
        //Get remove index
        const removeIndex = projectProfile.programinglanguages.map(item =>item.id).indexOf(req.params.pro_id);
          projectProfile.programinglanguages.splice(removeIndex,1);
          await projectProfile.save();
          res.json(projectProfile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route    PUT api/projectprofile/frameworks
//@desc     Add Frameworks to the project profile
//@access Private
router.put('/frameworks', [auth,[
    check ('frameworkname', 'Framework name is required')
]], async (req,res)=>{
    const errors =validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json ({errors:errors.array()});
    }
    const {
        frameworkname,
        companyid
    } =req.body;
    const newFramework ={
        frameworkname
    }
    try {
        const projectProfile = await Projectprofile.findOne({user:req.user.id, companyid});
            // Add
          projectProfile.frameworks.unshift(newFramework);
          await projectProfile.save();
          res.json(projectProfile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})
//@route    DELETE api/projectprofile/frameworks/:fr_id
//@desc     Delete frameworks from the project profile
//@access Private
router.delete('/frameworks/:fr_id', auth, async (req,res)=>{
    try {
        const projectProfile = await Projectprofile.findOne({user:req.user.id});
        //Get remove index
        const removeIndex = projectProfile.frameworks.map(item=>item.id).indexOf(req.params.fr_id);
          projectProfile.frameworks.splice(removeIndex,1);
          await projectProfile.save();
          res.json(projectProfile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route    PUT api/projectprofile/database
//@desc     Add Database to the project profile
//@access Private
router.put('/database', [auth,[
    check ('databasename', 'Database name is required')
]], async (req,res)=>{
    const errors =validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json ({errors:errors.array()});
    }
    const {
        databasename,
        companyid
    } =req.body;
    const newDatabase ={
        databasename
    }
    try {
        const projectProfile = await Projectprofile.findOne({user:req.user.id, companyid});
            // Add
          projectProfile.databases.unshift(newDatabase);
          await projectProfile.save();
          res.json(projectProfile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})
//@route    DELETE api/projectprofile/database/:fr_id
//@desc     Delete databases from the project profile
//@access Private
router.delete('/database/:db_id', auth, async (req,res)=>{
    try {
        const projectProfile = await Projectprofile.findOne({user:req.user.id});
        //Get remove index
        const removeIndex = projectProfile.databases.map(item=>item.id).indexOf(req.params.db_id);
          projectProfile.databases.splice(removeIndex,1);
          await projectProfile.save();
          res.json(projectProfile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


//@route    PUT api/projectprofile/developmenttechniques
//@desc     Add development techniques to the project profile
//@access Private
router.put('/developmenttechniques', [auth,[
    check ('techname', 'Development technique is required')
]], async (req,res)=>{
    const errors =validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json ({errors:errors.array()});
    }
    const {
        techname,
        companyid
    } =req.body;
    const newTech ={
        techname
    }
    try {
        const projectProfile = await Projectprofile.findOne({user:req.user.id, companyid});
            // Add
          projectProfile.developmenttechniques.unshift(newTech);
          await projectProfile.save();
          res.json(projectProfile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})
//@route    DELETE api/projectprofile/developmenttechniques/:t_id
//@desc     Delete Development techs from the project profile
//@access Private
router.delete('/developmenttechniques/:t_id', auth, async (req,res)=>{
    try {
        const projectProfile = await Projectprofile.findOne({user:req.user.id});
        //Get remove index
        const removeIndex = projectProfile.developmenttechniques.map(item=>item.id).indexOf(req.params.t_id);
          projectProfile.developmenttechniques.splice(removeIndex,1);
          await projectProfile.save();
          res.json(projectProfile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;