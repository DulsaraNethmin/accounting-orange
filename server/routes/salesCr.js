const express = require('express');
const SalesCr =require('../model/SalesCr');

const router =express.Router();

//post to save the record
router.post('/',async(req,res)=>
{
    //console.log(res.body);
    try
    {
        console.log(req.body);
        const salesCr=await SalesCr.create(req.body);
        //console.log();
        if(salesCr)
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
    const data=await SalesCr.find(req.query);
    res.status(200).json(data);
})


// get by id
router.get('/:id',async(req,res)=>
{
    console.log(req.query)
    const data=await SalesCr.find(req.query);
    res.status(200).json(data);
})

// find and delete

router.delete('/:id',async(req,res)=>
{
    try
    {
       console.log(req.body);
        const salesCr=await SalesCr.findByIdAndDelete(req.params.id);

        if(salesCr)
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
        const salesCr=await SalesCr.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});

        if(salesCr)
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