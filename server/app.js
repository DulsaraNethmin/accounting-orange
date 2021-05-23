const express = require('express');
const mongoose = require('mongoose');
const bodyParser =require('body-parser');
const cors =require('cors');
const app=express();
app.use(bodyParser.json());
const user=require('./routes/user');
const login=require('./routes/login');
const salesRe=require('./routes/salesRe');
const salesCr=require('./routes/salesCr');
const purchaseRe=require('./routes/purchaseRe');
const purchaseCr=require('./routes/purchaseCr');
const cashPr=require('./routes/cashPr');
const cashSl=require('./routes/cashSl');
const report= require('./routes/report');
require('dotenv').config();
app.use(cors());

//monunt user
app.use('/user/info/save',user);
//mount login
app.use('/user/info/login',login);
app.use('/user/info/sales.re',salesRe);
app.use('/user/info/sales.cr',salesCr);
app.use('/user/info/purchase.re',purchaseRe);
app.use('/user/info/purchase.cr',purchaseCr);
app.use('/user/info/cash.pr',cashPr);
app.use('/user/info/cash.sl',cashSl);
app.use('/get.user.info',report);


app.get('/',(req,res)=>res.send('hello'));

const uri = "mongodb+srv://user:user123@nethmincluster99.5wvxn.mongodb.net/Accountina?retryWrites=true&w=majority";


mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>console.log("server connected to mongo"))
        .catch((e)=>console.log(e));



app.listen(process.env.PORT || 8080,(err)=>console.log("server connected"));