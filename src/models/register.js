const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        require:true
    }
})

// create collection

const Register =new mongoose.model("RegisterDB",userSchema);

module.exports=Register;