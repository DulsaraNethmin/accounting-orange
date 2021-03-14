const express = require('express');
const SalesRe =require('../model/SalesRe');

const router =express.Router();

//post to save the record 
router.post('/',async(req,res)=>
{
    try
    {
       
        const salesRe=await SalesRe.create(req.body);

        if(salesRe)
            return res.status(201).send(req.body);

        else
            return res.status(201).send("notRecorded");
    }
    catch(err)
    {
        return res.status(400).send({err});
    }
}); 

// get
router.get('/',async(req,res)=>
{
    console.log(req.query);
    const data=await SalesRe.findOne(req.query);
    res.status(200).json(data);
})


// get by id
router.get('/:id',async(req,res)=>
{
    console.log(req.query)
    const data=await SalesRe.find(req.query);
    res.status(200).json(data);
})

// find and delete

router.delete('/:id',async(req,res)=>
{
    try
    {
       console.log(req.body);
        const salesRe=await SalesRe.findByIdAndDelete(req.params.id);

        if(salesRe)
            return res.status(201).send("deleted");
        else
            return res.status(201).send("notRecorded");
    }
    catch(err)
    {
        return res.status(400).send({err});
    }
})

// update(put)

router.put('/:id',async(req,res)=>
{
    try
    {
       
        const salesRe=await SalesRe.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});

        if(salesRe)
            return res.status(201).send("recorded");
        else
            return res.status(201).send("notRecorded");
    }
    catch(err)
    {
        //alert('error');
        //return res.status(400).send({err});
    }
})

module.exports=router;