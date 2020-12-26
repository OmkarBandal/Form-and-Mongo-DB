const express = require('express');
const app= express();
require("./db/conn");
const Register = require("./models/register")
const path =require('path');

const port = process.env.PORT || 3000;

const static_path=path.join(__dirname,"../src/public");
app.use(express.static(static_path))

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.get('',(req,res)=>{
    res.send('Hello from the home page ');

});

app.post('',async(req,res)=>{
    try {
        
        const password = req.body.password;
        const confirmpassword = req.body.confirmpassword;

        if(password===confirmpassword){

            const userRegister = new Register({
                
                name :req.body.name,
                phone :req.body.phone,
                email :req.body.email,
                password :req.body.password,
                confirmpassword :req.body.confirmpassword,

            })
            const register = await userRegister.save()

        }else{
            res.send("password not matching")
        }

    } catch (error) {
        res.status(400).send(error);
        
    }
});

app.listen(port,()=>{
    console.log(`Server is running ${port}`);
})  