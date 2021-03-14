const mongoose = require('mongoose');
let cashPrSchema = new mongoose.Schema({
    date: {
        type: Date,
        required:true
    },
    invoice: {
        type: String,
        required:true

    },
    customer: {
        type: String,
        required:true
    },
    // quantity: {
    //     type: Number,
    //     required:true
    // },
    // uprice: {
    //     type: Number,
    //     required:true
   // },
    discount: {
        type: Number,
        required:true
    },
    value:{
        type:Number,
        require:true
    }
},
    {collection:"cashpr"}
);
module.exports = mongoose.model('CashPr', cashPrSchema);