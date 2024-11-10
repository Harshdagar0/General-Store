const express = require("express");
const mongoose = require('mongoose');
const itemModel = require('./models/item');
const persondataModel = require('./models/persondata');
const User = require('./models/login');
const bodyparser = require("body-parser");
const bcryptjs = require('bcryptjs');

const cors  = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyparser.json());

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://dagarh89:dagarh89@itemdata.3gdch.mongodb.net/?retryWrites=true&w=majority&appName=itemData/itemData');
  console.log("mongodb is conneted")
};

app.get("/",async(req,res)=>{
    const items = await itemModel.find();
     res.json(items);
});

//create cart item
app.post("/data",async(req,res)=>{
const small = new persondataModel();
  small.name= req.body.name;
  small.quantiy= req.body.qu;
  small.price= req.body.price;
  small.color= req.body.color;
  small.image= req.body.image;
  small.email= req.body.email;
  await small.save();
});

// created user
 
app.post("/register",async(req,res)=>{
    try {
         const {fullname,email,password} = await req.body;
         const user = await User.findOne({ email });
               if (user) {
                   return res.status(400).json({ message: "User already exists" });
               }else{
                const hashPassword = await bcryptjs.hash(password, 10);
                  const newuser = new User({
                    fullname:fullname,
                    email:email,
                    password:hashPassword
                  })
                  await newuser.save();
                  return res.status(201).json({ message: "User create successfully" });


               };

    } catch (error) {

                  return res.status(500).json({ message: "Internal server error"+error });
        
    };
            
});

//login
app.post("/login",async(req,res)=>{
    try {
        let {email,password}=req.body;
        const user = await User.findOne({ email });
        console.log(user);
        if(user){
            if(await bcryptjs.compare(password, user.password)){
                return res.status(201).json({ message: "login successfully",email:email,fullname:user.fullname,islogin:"true"});
            }else{
                return res.status(400).json({ message: "password is incorrect" });
            };
        }else{
            return res.status(400).json({ message: "user is not exist" });
        };
          
        
    } catch (error) {
        return res.status(500).json({ message: "Internal server error"+error });
    }
})

  //delete cart item

app.post("/delete",async(req,res)=>{
let id=req.body.id;
await persondataModel.deleteOne({ _id:id });
});

// send cart items
app.post("/send",async(req,res)=>{
    
    let {email,fullname,islogin} = req.body.logindata;
    if(email){

        const items = await persondataModel.find({email:email});
        res.json(items);
    };

});


//listening 
app.listen(3003,()=>{
    console.log("app is running");
});


