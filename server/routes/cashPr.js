const express = require('express');
const CashPr =require('../model/CashPr');

const router =express.Router();

//post to save the record
router.post('/',async(req,res)=>
{
    try
    {
        const cashPr=await CashPr.create(req.body);
        //console.log();
        if(cashPr)
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
    const data=await CashPr.find(req.query);
    res.status(200).json(data);
})


// get by id
router.get('/:id',async(req,res)=>
{
    console.log(req.query)
    const data=await CashPr.find(req.query);
    res.status(200).json(data);
})

// find and delete

router.delete('/:id',async(req,res)=>
{
    try
    {
       console.log(req.body);
        const cashPr=await CashPr.findByIdAndDelete(req.params.id);

        if(cashPr)
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
       console.log(req.params);
        const cashPr=await CashPr.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});

        if(cashPr)
            return res.status(201).send("recorded");
        else
            return res.status(201).send("notRecorded");
    }
    catch(err)
    {
        //alert('error');
        return res.status(400).send({err});
    }
})
module.exports=router;