import React, { useState } from "react";
import * as S from "./style";

import Header from "../Header/Header";

import { Form, Row, Col, FormGroup, Label, Input } from "reactstrap";
import Snackbar from "@mui/material/Snackbar";
import { Alert, Box, Button } from "@mui/material";
import axios from "axios";

function Contactpage() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    phonenumber: "",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleData = async (e) => {
    e.preventDefault();
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
  };

  const postData = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/contactdata", {
        name: data.name,
        email: data.email,
        phonenumber: parseInt(data.phonenumber)
      });
      setLoading(false);
      setOpen(true);
      window.scrollTo(0, 0);
      setData({
        name: "",
        email: "",
        phonenumber: "",
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <S.Wrap>
      <Header />
      <S.MainSection>
        <S.Text>Get in touch</S.Text>
      </S.MainSection>

      <S.ThirdSection>
        <S.LeftDiv></S.LeftDiv>
        <S.RightDiv>
          <S.SomeText>Contact us</S.SomeText>
          <S.FormDiv>
            <Box
              sx={{
                width: 300,
                height: 300,
              }}
            >
              <Form onSubmit={(e) => postData(e)}>
                <Row>
                  <FormGroup>
                    <Label
                      for="name"
                      style={{
                        color: "#594545",
                        fontWeight: 630,
                        fontSize: "1.1em",
                      }}
                    >
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Name"
                      type="text"
                      style={{ border: "2px solid #594545" }}
                      value={data.name}
                      onChange={handleData}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label
                      for="email"
                      style={{
                        color: "#594545",
                        fontWeight: 630,
                        fontSize: "1.1em",
                      }}
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      placeholder="Email"
                      type="text"
                      style={{ border: "2px solid #594545" }}
                      value={data.email}
                      onChange={handleData}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label
                      for="phonenumber"
                      style={{
                        color: "#594545",
                        fontWeight: 630,
                        fontSize: "1.1em",
                      }}
                    >
                      Phone
                    </Label>
                    <Input
                      id="phonenumber"
                      name="phonenumber"
                      placeholder="890xxxxxxx"
                      type="number"
                      style={{ border: "2px solid #594545" }}
                      value={data.phonenumber}
                      onChange={handleData}
                      required
                    />
                  </FormGroup>
                </Row>
                <S.ButtonWrap>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: "#03175C", color: "white" }}
                    type="submit"
                  >
                    Submit
                  </Button>
                </S.ButtonWrap>
              </Form>
            </Box>
          </S.FormDiv>
        </S.RightDiv>
      </S.ThirdSection>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Thanks. We will contact you shortly!
        </Alert>
      </Snackbar>
      <S.Copyrighttext>Copyright 2022 - Sabar Foundation</S.Copyrighttext>
    </S.Wrap>
  );
}

export default Contactpage;
