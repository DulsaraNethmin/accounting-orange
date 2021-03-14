const express = require('express');
const User =require('../model/User');

const router =express.Router();

//post to save the user
router.post('/',async(req,res)=>
{
    try
    {
        const user=await User.create(req.body);
        console.log(user);
        if(user)
            return res.status(201).send("userCreated");
        else
            return res.status(201).send("userNotCreated");
    }
    catch(err)
    {
        return res.status(400).send("badRequest");
    }
}); 

// get
router.get('/',async(req,res)=>
{
    const data=await User.find(req.query);
    res.status(200).json(data);
})


// get by id
router.get('/:id',async(req,res)=>
{
    console.log(req.query)
    const data=await User.find(req.query);
    res.status(200).json(data);
})

// find and delete

router.delete('/',async(req,res)=>
{
    User.findOneAndDelete(req.query)
    res.status(201).json(`${req.query.Name} is deleted`);
})

// update(put)

router.put('/:id',(req,res)=>
{
    console.log(req.params);
    res.status(200).json({msg:`successfully updated item no ${req.params.id}`, time:Date()});
})

module.exports=router;