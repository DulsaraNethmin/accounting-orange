const mongoose = require('mongoose');
let purchaseCrSchema = new mongoose.Schema({
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
    }
},
{collection:"purchasecr"}
);
module.exports = mongoose.model('PurchaseCr', purchaseCrSchema);