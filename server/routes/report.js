const express = require('express'); 
const SalesCr =require('../model/SalesCr');
const SalesRe =require('../model/SalesRe');
const PurchaseRe =require('../model/PurchaseRe');
const PurchaseCr =require('../model/PurchaseCr');
const CashSl =require('../model/CashSl');
const CashPr =require('../model/CashPr');

const router =express.Router();


router.get('/',async(req,res)=> 
    {
        console.log(req.query);
        let data=
        {
            cashsl:'',cashpr:'',salescr:'',purchasecr:'',salesre:'',purchasere:''
        };
        try
        {
            const cashsl= await CashSl.find({date:{$gte:req.query.fdate,$lt:req.query.tdate}});
            const cashpr= await CashPr.find({date:{$gte:req.query.fdate,$lt:req.query.tdate}});
            const salescr= await SalesCr.find({date:{$gte:req.query.fdate,$lt:req.query.tdate}});
            const purchasecr= await PurchaseCr.find({date:{$gte:req.query.fdate,$lt:req.query.tdate}});
            const salesre= await SalesRe.find({date:{$gte:req.query.fdate,$lt:req.query.tdate}});
            const purchasere= await PurchaseRe.find({date:{$gte:req.query.fdate,$lt:req.query.tdate}});
            if(cashsl)
            {
               // res.status(200).json(cashsl);
               //data.push(cashsl);
               data.cashsl=cashsl;
            } 
            if(cashpr)
            {
                //res.status(200).json(cashpr);
                //data.push(cashpr);
                data.cashpr=cashpr;
            } 
            if(salescr)
            {
                //res.status(200).json(salescr);
                //data.push(salescr);
                data.salescr=salescr;
            } 
            if(purchasecr)
            {
                //res.status(200).json(purchaseCr);
                //data.push(purchasecr)
                data.purchasecr=purchasecr;
            } 
            if(salesre)
            {
                //res.status(200).json(salesre);
                //data.push(salesre);
                data.salesre=salesre;
            } 
            if(purchasere)
            {
                //res.status(200).json(purchasere);
                //data.push(purchasere);
                data.purchasere=purchasere;
            } 
            res.status(200).json(data);
        }
        catch(err)
        {
            res.status(400).send({err});
        }

    })

module.exports=router;