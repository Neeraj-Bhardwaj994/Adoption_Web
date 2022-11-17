import React, { useState } from "react";
import * as S from "./style";
import Header from "../Header/Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import { Form, Row, Col, FormGroup, Label, Input } from "reactstrap";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

function Adminauth({ setLoggedUser }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [errdata, setErrdata] = useState();

  // const [logged, setLogged] = useState(false);

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  let value;
  const handleData = (e) => {
    e.preventDefault();
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
    // console.log(newdata);
  };

  const getCred = (e) => {
    e.preventDefault();
    axios.post("http://apiserver.qmvsolution.com/login", data).then((response) => {
      setOpen(true);
      setErrdata(response.data.message);
      setLoggedUser(response.data.data);
      navigate("/admindashboard");
      // window.localStorage.setItem("token", data.username);
      // window.localStorage.setItem("isLoggedIn", true);
    });
  };

  return (
    <S.Wrap>
      <Header />

      <S.Img src={"Sabar_Logo_img.jpg"} alt="Sabar Logo"></S.Img>
      <S.UppertextSec>Admin Credentials</S.UppertextSec>
      <S.SecSection>
        <Form>
          <FormGroup>
            <Label
              for="username"
              style={{ color: "#594545", fontWeight: 630, fontSize: "1.1em" }}
            >
              Username
            </Label>
            <Input
              id="username"
              name="username"
              placeholder="Username"
              type="text"
              style={{ border: "2px solid #594545" }}
              value={data.username}
              onChange={handleData}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label
              for="password"
              style={{ color: "#594545", fontWeight: 630, fontSize: "1.1em" }}
            >
              Password
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="Password"
              type="text"
              style={{ border: "2px solid #594545" }}
              value={data.password}
              onChange={handleData}
              required
            />
          </FormGroup>

          <S.ButtonWrap>
            <Button
              variant="text"
              style={{ color: "#FBAF41" }}
              type="button"
              onClick={() => {
                navigate("/");
              }}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              style={{ backgroundColor: "#013870", color: "white" }}
              type="submit"
              onClick={(e) => getCred(e)}
            >
              Get in
            </Button>
            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={open}
              autoHideDuration={2000}
              onClose={handleClose}
            >
              <Alert
                onClose={handleClose}
                severity="info"
                sx={{ width: "100%" }}
              >
                {errdata}
              </Alert>
            </Snackbar>
          </S.ButtonWrap>
        </Form>
      </S.SecSection>
    </S.Wrap>
  );
}

export default Adminauth;
