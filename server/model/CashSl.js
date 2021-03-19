const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let cashSlSchema = new mongoose.Schema({
    date: {
        type:Date,
        required:true
    },
    invoice: {
        type: String,
        required:true,
        unique:true
    },
    item: {
        type: String,
        required:true,
        unique:true
    },
    customer: {
        type: String,
        required:true
    },
    discount: {
        type: Number,
        required:true
    },
    value:{
        type:Number,
        require:true
    }
},
    {collection:"cashsl"}
);
module.exports = mongoose.model('CashSl',cashSlSchema);