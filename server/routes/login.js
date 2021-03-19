const express = require('express');
const User=require('../model/User');

const router=express.Router();

//post method
router.post('/',async(req,res)=>
{
    try
    {
       //console.log(req);        
        const user=await User.findOne({email:req.body.email,password:req.body.password});
        console.log(user);
        if(user)
            {
                res.status(200).send('ok');
            }
        else
            {
                res.status(200).send('wrong pw');
            }
    }
    catch(err)
    {
        res.status(400).send('bad req');
    }
});



module.exports=router;