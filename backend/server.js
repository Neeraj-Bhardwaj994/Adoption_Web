import express, { request } from "express";
import mongoose from "mongoose";
import Data from "./mySchema.js";
import Contact from "./contactSchema.js";
import AuthData from "./authSchema.js";
import cors from "cors";
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
    console.log("Connected Successfully");
  }
);

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
    }
  });
});

app.get("/getdata", (req, res) => {
  Data.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/contactdata", (req, res) => {
  const contactdata = req.body;
  Contact.create(contactdata, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/getcontactdata", (req, res) => {
  Contact.find({}, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
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
    }
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  AuthData.findOne({ username: username }, (err, data) => {
    if (data) {
      if (password === data.password) {
        res.send({ message: "login success", data: data });
      } else {
        res.send({ message: "Password not found" });
      }
    } else {
      res.send({ message: "User is not Registered" });
    }
  });
});

app.get("/getdata/:id", (req, res) => {
  const dataid = req.params.id;
  Data.findById(dataid, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});



app.listen(PORT, () => console.log(`I am Listening on ${PORT}`));
