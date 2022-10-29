import express, { request } from "express";
import mongoose from "mongoose";
import Data from "./mySchema.js";
import AuthData from "./authSchema.js";
import cors from 'cors'

const PORT = process.env.PORT || 5000;
const connectionUrl =
  "mongodb+srv://neerajbhardwaj:QODQ0ZpygIMstsjJ@cluster0.afnhzde.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
app.use(cors());

mongoose.connect(
  connectionUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connection Successfully");
  }
);

// app.get("/", (req,res) => {
//     res.status(200).send("Hello world");
// });

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.post("/filldata", (req, res) => {
  const adoptdata = req.body;
  Data.create(adoptdata, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
      console.log(data);
    }
  });
});

app.get("/getdata", (req, res) => {
  Data.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
      console.log(data);
    }
  });
});

app.post("/auth", (req, res) => {
  const loginCred = req.body;
  AuthData.create(loginCred, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
      console.log(data);
    }
  });
});

// app.post("/login", (req, res) => {
//     const { username, password } = req.body;
//     AuthData.find({username: username}, (err, data) =>{
//         if(data){
//             if(password === data.password){
//                 res.status(200).send({username: username});
//             } else{
//                 res.status(500).send("Password is incorrect");
//                 console.log(data);
//             }
//         } else{
//             res.status(401).send("User is not registered");
//         }
//     })
// })

app.post("/login",(req,res)=>{
  // console.log(req.body);
  const {username,password} = req.body;
  AuthData.findOne({username:username},(err,data)=>{
      if(data){
         if(password === data.password){
           res.send({message:"login success",data:data})
          }else{
             res.send({message:"Password not found"})
         }
      }else{
          res.send({message:"User is not Registered"})
      }
  })
});

// Data.find({}, (err,data) => {
//     if(err) {console.log(err)}
//     else {console.log(data)}
// })

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
