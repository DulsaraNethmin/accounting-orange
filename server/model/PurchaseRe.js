const mongoose = require('mongoose');
let purchaseReSchema = new mongoose.Schema({
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
    {collection:"purchasere"}
);
module.exports = mongoose.model('PurchaseRe', purchaseReSchema);