const express = require('express');
const CashSl =require('../model/CashSl');

const router =express.Router();

//post to save the record
router.post('/',async(req,res)=>
{
    try
    {
        const cashSl=await CashSl.create(req.body);
        //console.log();
        if(cashSl)
            return res.status(201).send("recorded");
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
    const data=await CashSl.find(req.query);
    res.status(200).json(data);
})


// get by id
router.get('/:id',async(req,res)=>
{
    console.log(req.query)
    const data=await CashSl.find(req.query);
    res.status(200).json(data);
})

// find and delete

router.delete('/:id',async(req,res)=>
{
    try
    {
       console.log(req.body);
        const cashSl=await CashSl.findByIdAndDelete(req.params.id);

        if(cashSl)
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
        const cashSl=await CashSl.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});

        if(cashSl)
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