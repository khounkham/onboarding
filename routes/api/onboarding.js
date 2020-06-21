const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
//const auth= require('../../middleware/auth');
const Newonboarding= require('../../models/Newonboarding');
//const Profile= require('../../models/Profile');
const User= require('../../models/User');

//@route    POST api/posts
//@desc     Create a post
//@access Private
router.post('/', /*[auth, [
    check ('text', 'Text is required').not().isEmpty()
    ]
],*/
async (req,res) => {
    console.log(req);
    //res.json({good: true});
    // const errors = validationResult(req);
    // if(!errors.isEmpty()) {
    //     return res.status(400).json({errors:errors.array()});
    // }

    try {

        //const user = await User.findById(req.user.id).select('-password');

        const newOnboarding = new Newonboarding({
        user: req.body.userId,
        companyprofile: [
          { companyname: req.body.companyName,
            companydescription: req.body.companyDescription
          }
        ]
    });
  
    const onboarding = await newOnboarding.save();
    res.json(onboarding);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}
);
module.exports = router;