const mongoose = require('mongoose');
let salesReSchema = new mongoose.Schema({
    Date: {
        type: String,
        required:true
    },
    creditnote: {
        type:String,
        required:true,
        unique:true
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
    },
    
},
{collection:'salesre'}

);
module.exports = mongoose.model('SalesRe', salesReSchema);