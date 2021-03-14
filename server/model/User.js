const mongoose =require('mongoose');


const userSchema=mongoose.Schema
({
    Name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    phonno:{type:String,required:true},
    password:{type:String,required:true},
},
{collection:'user'}
);


module.exports=mongoose.model('User',userSchema);
