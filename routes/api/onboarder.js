const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const auth= require('../../middleware/auth');
const Onboarder= require('../../models/Onboarder');
const Projectprofile= require('../../models/Projectprofile');
const User= require('../../models/User');

//@route    POST api/onboarder
//@desc     Create or update onboarder profile
//@access Private
router.post('/', [auth
  , [
  check ('onboarderName', 'Onboarder name is required').not().isEmpty()
  ],
  [
  check ('onboarderEmail', 'Onboarder email is required').not().isEmpty()
  ]
], 
async (req,res)=>{
  const errors =validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
  const {projectid,
      onboarderName,
      onboarderEmail,
      companyCultureScore,
      teamNormScore,
      ownRoleResponbilityScore,
      otherResponsibilityScore,
      workTodoScore,
      codeAndTestScore,
      standardWorkQualityScore,
      agileMindsetScore,
      agileArtefactTechScore,
      projectStructureScore,
      projectDomainTerminologyScore  
    } = req.body;
// build onboarder's profile object
    const onboarderprofileFields = {};
    onboarderprofileFields.user = req.user.id;
    if(projectid) onboarderprofileFields.projectid = projectid;
    if(onboarderName) onboarderprofileFields.onboarderName= onboarderName;
    if(onboarderEmail) onboarderprofileFields.onboarderEmail= onboarderEmail;
    if(companyCultureScore) onboarderprofileFields.companyCultureScore= companyCultureScore;
    if(teamNormScore) onboarderprofileFields.teamNormScore= teamNormScore;
    if(ownRoleResponbilityScore) onboarderprofileFields.ownRoleResponbilityScore= ownRoleResponbilityScore;
    if(otherResponsibilityScore) onboarderprofileFields.otherResponsibilityScore= otherResponsibilityScore;
    if(workTodoScore) onboarderprofileFields.workTodoScore= workTodoScore;
    if(codeAndTestScore) onboarderprofileFields.codeAndTestScore= codeAndTestScore;
    if(standardWorkQualityScore) onboarderprofileFields.standardWorkQualityScore= standardWorkQualityScore;
    if(agileMindsetScore) onboarderprofileFields.agileMindsetScore= agileMindsetScore;
    if(agileArtefactTechScore) onboarderprofileFields.agileArtefactTechScore= agileArtefactTechScore;
    if(projectStructureScore) onboarderprofileFields.projectStructureScore= projectStructureScore;
    if(projectDomainTerminologyScore) onboarderprofileFields.projectDomainTerminologyScore= projectDomainTerminologyScore;
    // try {
    //   let existOnboarder= await Onboarder.findOne({onboarderEmail});
    //   if(existOnboarder){
    //       return res.status(400).json({errors: [{msg: 'Onboarder already exists'}]});
    //   }
    //console.log(onboarderprofileFields);
          try {
              let onboarderprofile = await Onboarder.findOne({user: req.user.id, projectid, onboarderEmail, onboarderName}, 0);
              //console.log(onboarderprofile);
              if(onboarderprofile){
                  //Update
                  onboarderprofile = await Onboarder.findOneAndUpdate(
                      {user: req.user.id, projectid, onboarderEmail, onboarderName},
                      {$set:onboarderprofileFields},
                      {new:true});
                return res.json(onboarderprofile);
              }
                  //Create
                  //console.log(onboarderprofile);
                  onboarderprofile = new Onboarder(onboarderprofileFields)
                  await onboarderprofile.save();
              res.json(onboarderprofile);
          } catch (err) {
              console.error(err.message);
              res.status(500).send('Server Error');
          }
});

//@route    PUT api/onboarder/managementtoolsScore
//@desc     Add management tool score to the onborder profile
//@access Private
router.put('/managementtoolsScore', [auth,
  [check('tName', 'Management tool name is required').not().isEmpty(),
  check('tScore', 'Score is required').not().isEmpty()
  ]]
, async (req,res)=>{
  const errors =validationResult(req);
  if (!errors.isEmpty()){
      return res.status(400).json ({errors:errors.array()} );
  }
  const {
    projectid,
    onboarderName,
    onboarderEmail,
      tName, tScore
  } =req.body;
  const newMgtTool ={
    projectid,
    onboarderName,
    onboarderEmail,
    tName,
    tScore
  }
  try {
      const onboarderprofile = await Onboarder.findOne({user:req.user.id, onboarderName, 
        onboarderEmail, projectid}, 0);
        // Add
        //console.log(onboarderprofile);
        onboarderprofile.managementtoolsScore.unshift(newMgtTool);
        await onboarderprofile.save();
        res.json(onboarderprofile);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }
});
//@route    DELETE api/onboarderprofile/managementtoolsScore/:mgt_id
//@desc     Delete management tool from the onboarder profile
//@access Private
router.delete('/managementtoolsScore/:mgt_id', auth, async (req,res)=>{
  const {
      onboarderEmail
  } =req.body;
  try {
      const onboarderprofile = await Onboarder.findOne({user:req.user.id, onboarderEmail});
      //Get remove index
      const removeIndex = onboarderprofile.managementtoolsScore.map(item =>item.id).indexOf(req.params.mgt_id);
      onboarderprofile.managementtoolsScore.splice(removeIndex,1);
        await onboarderprofile.save();
        res.json(onboarderprofile);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }
});

//@route    PUT api/onboarder/developmentmethodology
//@desc     Add Development Methodology score to the onborder profile
//@access Private
router.put('/developmentmethodology', [auth,
  [check('mName', 'Development methodology name is required').not().isEmpty(),
  check('mScore', 'Development methodology score is required').not().isEmpty()
  ]]
, async (req,res)=>{
  const errors =validationResult(req);
  if (!errors.isEmpty()){
      return res.status(400).json ({errors:errors.array()} );
  }
  const {
    projectid,
    onboarderName,
    onboarderEmail,
      mName, mScore
  } =req.body;
  const newDevMethod ={
    projectid,
    onboarderName,
    onboarderEmail,
    mName,
    mScore
  }
  try {
      const onboarderprofile = await Onboarder.findOne({user:req.user.id, onboarderName, 
        onboarderEmail, projectid}, 0);
        // Add
        //console.log(onboarderprofile);
        onboarderprofile.developmentmethodology.unshift(newDevMethod);
        await onboarderprofile.save();
        res.json(onboarderprofile);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }
});
//@route    DELETE api/onboarderprofile/developmentmethodology/:mgt_id
//@desc     Delete Development Methodology score from the onboarder profile
//@access Private
router.delete('/developmentmethodology/:devt_id', auth, async (req,res)=>{
  const {
      onboarderEmail
  } =req.body;
  try {
      const onboarderprofile = await Onboarder.findOne({user:req.user.id, onboarderEmail});
      //Get remove index
      const removeIndex = onboarderprofile.developmentmethodology.map(item =>item.id).indexOf(req.params.devt_id);
      onboarderprofile.developmentmethodology.splice(removeIndex,1);
        await onboarderprofile.save();
        res.json(onboarderprofile);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }
});

//@route    PUT api/onboarder/programinglanguage
//@desc     Add programing language score to the onborder profile
//@access Private
router.put('/programinglanguage', [auth,
  [check('pName', 'Programing language is required').not().isEmpty(),
  check('pScore', 'Programing score is required').not().isEmpty()
  ]]
, async (req,res)=>{
  const errors =validationResult(req);
  if (!errors.isEmpty()){
      return res.status(400).json ({errors:errors.array()} );
  }
  const {
    projectid,
    onboarderName,
    onboarderEmail,
      pName, pScore
  } =req.body;
  const newProgramingLanguage ={
    projectid,
    onboarderName,
    onboarderEmail,
    pName,
    pScore
  }
  try {
      const onboarderprofile = await Onboarder.findOne({user:req.user.id, onboarderName, 
        onboarderEmail, projectid}, 0);
        // Add
        //console.log(onboarderprofile);
        onboarderprofile.programinglanguage.unshift(newProgramingLanguage);
        await onboarderprofile.save();
        res.json(onboarderprofile);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }
});
//@route    DELETE api/onboarderprofile/programinglanguage/:pr_id
//@desc     Delete programing language score from the onboarder profile
//@access Private
router.delete('/programinglanguage/:pr_id', auth, async (req,res)=>{
  const {
      onboarderEmail
  } =req.body;
  try {
      const onboarderprofile = await Onboarder.findOne({user:req.user.id, onboarderEmail});
      //Get remove index
      const removeIndex = onboarderprofile.programinglanguage.map(item =>item.id).indexOf(req.params.pr_id);
      onboarderprofile.programinglanguage.splice(removeIndex,1);
        await onboarderprofile.save();
        res.json(onboarderprofile);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }
});

//@route    PUT api/onboarder/framework
//@desc     Add framework score to the onborder profile
//@access Private
router.put('/framework', [auth,
  [check('fName', 'Framework is required').not().isEmpty(),
  check('fScore', 'Framework score is required').not().isEmpty()
  ]]
, async (req,res)=>{
  const errors =validationResult(req);
  if (!errors.isEmpty()){
      return res.status(400).json ({errors:errors.array()} );
  }
  const {
    projectid,
    onboarderName,
    onboarderEmail,
      fName, fScore
  } =req.body;
  const newFramework ={
    projectid,
    onboarderName,
    onboarderEmail,
    fName,
    fScore
  }
  try {
      const onboarderprofile = await Onboarder.findOne({user:req.user.id, onboarderName, 
        onboarderEmail, projectid}, 0);
        // Add
        //console.log(onboarderprofile);
        onboarderprofile.framework.unshift(newFramework);
        await onboarderprofile.save();
        res.json(onboarderprofile);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }
});
//@route    DELETE api/onboarderprofile/framework/:fr_id
//@desc     Delete framework score from the onboarder profile
//@access Private
router.delete('/framework/:fr_id', auth, async (req,res)=>{
  const {
      onboarderEmail
  } =req.body;
  try {
      const onboarderprofile = await Onboarder.findOne({user:req.user.id, onboarderEmail});
      //Get remove index
      const removeIndex = onboarderprofile.framework.map(item =>item.id).indexOf(req.params.fr_id);
      onboarderprofile.framework.splice(removeIndex,1);
        await onboarderprofile.save();
        res.json(onboarderprofile);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }
});

//@route    PUT api/onboarder/database
//@desc     Add database score to the onborder profile
//@access Private
router.put('/database', [auth,
  [check('dName', 'Database name is required').not().isEmpty(),
  check('dScore', 'Database score is required').not().isEmpty()
  ]]
, async (req,res)=>{
  const errors =validationResult(req);
  if (!errors.isEmpty()){
      return res.status(400).json ({errors:errors.array()} );
  }
  const {
    projectid,
    onboarderName,
    onboarderEmail,
      dName, dScore
  } =req.body;
  const newDatabase ={
    projectid,
    onboarderName,
    onboarderEmail,
    dName,
    dScore
  }
  try {
      const onboarderprofile = await Onboarder.findOne({user:req.user.id, onboarderName, 
        onboarderEmail, projectid}, 0);
        // Add
        //console.log(onboarderprofile);
        onboarderprofile.database.unshift(newDatabase);
        await onboarderprofile.save();
        res.json(onboarderprofile);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }
});
//@route    DELETE api/onboarderprofile/database/:db_id
//@desc     Delete database score from the onboarder profile
//@access Private
router.delete('/database/:db_id', auth, async (req,res)=>{
  const {
      onboarderEmail
  } =req.body;
  try {
      const onboarderprofile = await Onboarder.findOne({user:req.user.id, onboarderEmail});
      //Get remove index
      const removeIndex = onboarderprofile.database.map(item =>item.id).indexOf(req.params.db_id);
      onboarderprofile.database.splice(removeIndex,1);
        await onboarderprofile.save();
        res.json(onboarderprofile);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }
});

//@route    PUT api/onboarder/developmenttechnique
//@desc     Add development technique score to the onborder profile
//@access Private
router.put('/developmenttechnique', [auth,
  [check('devName', 'Development technique is required').not().isEmpty(),
  check('devScore', 'Development technique score is required').not().isEmpty()
  ]]
, async (req,res)=>{
  const errors =validationResult(req);
  if (!errors.isEmpty()){
      return res.status(400).json ({errors:errors.array()} );
  }
  const {
    projectid,
    onboarderName,
    onboarderEmail,
      devName, devScore
  } =req.body;
  const newDevtech ={
    projectid,
    onboarderName,
    onboarderEmail,
    devName,
    devScore
  }
  try {
      const onboarderprofile = await Onboarder.findOne({user:req.user.id, onboarderName, 
        onboarderEmail, projectid}, 0);
        // Add
        //console.log(onboarderprofile);
        onboarderprofile.developmenttechnique.unshift(newDevtech);
        await onboarderprofile.save();
        res.json(onboarderprofile);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }
});
//@route    DELETE api/onboarderprofile/developmenttechnique/:dev_id
//@desc     Delete Development technique score from the onboarder profile
//@access Private
router.delete('/developmenttechnique/:dev_id', auth, async (req,res)=>{
  const {
      onboarderEmail
  } =req.body;
  try {
      const onboarderprofile = await Onboarder.findOne({user:req.user.id, onboarderEmail});
      //Get remove index
      const removeIndex = onboarderprofile.developmenttechnique.map(item =>item.id).indexOf(req.params.dev_id);
      onboarderprofile.developmenttechnique.splice(removeIndex,1);
        await onboarderprofile.save();
        res.json(onboarderprofile);
  } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
  }
});

module.exports = router;