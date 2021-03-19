const mongoose = require('mongoose');
const creditSlSchema = new mongoose.Schema({
    date:{
        type:Date,
        required:true
    },
    invoice: {
        type: String,
        required:true,
        unique:true
    },
    customer: {
        type: String,
        required:true
    },
    item: {
        type: String,
        required:true
    },
    quantity: {
        type: Number,
        required:true
    },
    uprice: {
        type: Number,
        required:true
    },
    discount: {
        type: Number,
        required:true
    },
    value:{
        type:Number,
        require:true
    }},{collection:"salescr"})




    module.exports = mongoose.model('CreditSl',creditSlSchema);
   