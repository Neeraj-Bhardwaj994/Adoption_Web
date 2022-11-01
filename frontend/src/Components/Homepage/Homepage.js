import React, { useState } from "react";
import * as S from "./style";
import Header from "../Header/Header";
import axios from "axios";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";


import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";

const Homepage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const [data, setData] = useState({
    name: "",
    fathername: "",
    age: "",
    income: "",
    address: "",
    phonenumber: "",

    institutiontenth: "",
    statetenth: "",
    scoretenth: "",
    yeartenth: "",

    institutiontwelve: "",
    statetwelve: "",
    scoretwelve: "",
    yeartwelve: "",

    institutionbachelor: "",
    statebachelor: "",
    scorebachelor: "",
    yearbachelor: "",

    institutionpostgraduate: "",
    statepostgraduate: "",
    scorepostgraduate: "",
    yearpostgraduate: "",

    email: "",
    altphonenumber: "",
  });

  let value;
  const handleData = async (e) => {
    e.preventDefault();
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
  };

  const handleReset = () => {};

  const postData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/filldata", {
        name: data.name,
        fathername: data.fathername,
        age: parseInt(data.age),
        income: data.income,
        address: data.address,
        phonenumber: parseInt(data.phonenumber),

        institutiontenth: data.institutiontenth,
        statetenth: data.statetenth,
        scoretenth: parseFloat(data.scoretenth),
        yeartenth: data.yeartenth,

        institutiontwelve: data.institutiontwelve,
        statetwelve: data.statetwelve,
        scoretwelve: parseFloat(data.scoretwelve),
        yeartwelve: data.yeartwelve,

        institutionbachelor: data.institutionbachelor,
        statebachelor: data.statebachelor,
        scorebachelor: parseFloat(data.scorebachelor),
        yearbachelor: data.yearbachelor,

        institutionpostgraduate: data.institutionpostgraduate,
        statepostgraduate: data.statepostgraduate,
        scorepostgraduate: parseFloat(data.scorepostgraduate),
        yearpostgraduate: data.yearpostgraduate,

        email: data.email,
        altphonenumber: parseInt(data.altphonenumber),
      });
      setOpen(true);
      window.scrollTo(0, 0);
      setData({
        name: "",
        fathername: "",
        age: "",
        income: "",
        address: "",
        phonenumber: "",

        institutiontenth: "",
        statetenth: "",
        scoretenth: "",
        yeartenth: "",

        institutiontwelve: "",
        statetwelve: "",
        scoretwelve: "",
        yeartwelve: "",

        institutionbachelor: "",
        statebachelor: "",
        scorebachelor: "",
        yearbachelor: "",

        institutionpostgraduate: "",
        statepostgraduate: "",
        scorepostgraduate: "",
        yearpostgraduate: "",

        email: "",
        altphonenumber: "",
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <S.Wrap>
      <Header />
      <S.Section>
        <S.Uppertext>Fill all the details correctly.</S.Uppertext>
        <S.Lowertext>We want to know you more...</S.Lowertext>
      </S.Section>
      <S.SecSection>
        <S.UppertextSec>Personal Details</S.UppertextSec>
        <Form onSubmit={(e) => postData(e)}>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label
                  for="name"
                  style={{
                    color: "#594545",
                    fontWeight: 630,
                    fontSize: "1.1em",
                  }}
                >
                  Name*
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
                {/* {data.name.length<=0 ? <FormFeedback>Name is required</FormFeedback> : ""} */}
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label
                  for="fathername"
                  style={{
                    color: "#594545",
                    fontWeight: 630,
                    fontSize: "1.1em",
                  }}
                >
                  Father's Name*
                </Label>
                <Input
                  id="fathername"
                  name="fathername"
                  placeholder="Father's Name"
                  type="text"
                  style={{ border: "2px solid #594545" }}
                  value={data.fathername}
                  onChange={handleData}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label
                  for="age"
                  style={{
                    color: "#594545",
                    fontWeight: 630,
                    fontSize: "1.1em",
                  }}
                >
                  Age*
                </Label>
                <Input
                  id="age"
                  name="age"
                  placeholder="Age"
                  type="number"
                  style={{ border: "2px solid #594545" }}
                  value={data.age}
                  onChange={handleData}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label
                  for="income"
                  style={{
                    color: "#594545",
                    fontWeight: 630,
                    fontSize: "1.1em",
                  }}
                >
                  Annual income of the family*
                </Label>
                <Input
                  id="income"
                  name="income"
                  placeholder="Income"
                  type="select"
                  style={{ border: "2px solid #594545" }}
                  value={data.income}
                  onChange={handleData}
                  required
                >
                  {" "}
                  <option value="" hidden></option>
                  <option>Below 1 lakh</option>
                  <option>Below 2 lakhs</option>
                  <option>Below 5 lakhs</option>
                  <option>Below 10 lakhs</option>
                  <option>Below 15 lakhs</option>
                </Input>
              </FormGroup>
            </Col>

            <Col md={2}>
              <FormGroup>
                <Label
                  for="phonenumber"
                  style={{
                    color: "#594545",
                    fontWeight: 630,
                    fontSize: "1.1em",
                  }}
                >
                  Phone*
                </Label>
                <Input
                  id="phonenumber"
                  name="phonenumber"
                  placeholder="890xxxxxxx"
                  type="number"
                  style={{ border: "2px solid #594545" }}
                  value={data.phonenumber}
                  onChange={handleData}
                  invalid={data.phonenumber.length > 10}
                  required
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label
                  for="address"
                  style={{
                    color: "#594545",
                    fontWeight: 630,
                    fontSize: "1.1em",
                  }}
                >
                  Address*
                </Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="Address"
                  type="text"
                  style={{ border: "2px solid #594545" }}
                  value={data.address}
                  onChange={handleData}
                  required
                />
              </FormGroup>
            </Col>

            <Col md={3}>
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
                  placeholder="Email (optional)"
                  type="email"
                  style={{ border: "2px solid #594545" }}
                  value={data.email}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <Label
                  for="altphonenumber"
                  style={{
                    color: "#594545",
                    fontWeight: 630,
                    fontSize: "1.1em",
                  }}
                >
                  Alternate Phone
                </Label>
                <Input
                  id="altphonenumber"
                  name="altphonenumber"
                  placeholder="Alternate (optional)"
                  type="number"
                  style={{ border: "2px solid #594545" }}
                  value={data.altphonenumber}
                  onChange={handleData}
                  invalid={data.altphonenumber.length > 10}
                />
              </FormGroup>
            </Col>
          </Row>

          <S.UppertextSec>Educational Details</S.UppertextSec>
          <S.Smalltext>10th (if any)</S.Smalltext>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label
                  for="institutiontenth"
                  style={{
                    color: "#594545",
                    fontWeight: 630,
                    fontSize: "1.1em",
                  }}
                >
                  Institution Name
                </Label>
                <Input
                  id="institutiontenth"
                  name="institutiontenth"
                  style={{ border: "2px solid #594545" }}
                  placeholder="Institution Name"
                  value={data.institutiontenth}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <Label
                  for="statetenth"
                  style={{
                    color: "#594545",
                    fontWeight: 630,
                    fontSize: "1.1em",
                  }}
                >
                  State
                </Label>
                <Input
                  id="statetenth"
                  name="statetenth"
                  placeholder="State"
                  style={{ border: "2px solid #594545" }}
                  value={data.statetenth}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label
                  for="scoretenth"
                  style={{
                    color: "#594545",
                    fontWeight: 630,
                    fontSize: "1.1em",
                  }}
                >
                  Score
                </Label>
                <Input
                  id="scoretenth"
                  name="scoretenth"
                  placeholder="Score"
                  type="number"
                  style={{ border: "2px solid #594545" }}
                  value={data.scoretenth}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label
                  for="yeartenth"
                  style={{
                    color: "#594545",
                    fontWeight: 630,
                    fontSize: "1.1em",
                  }}
                >
                  Completion year
                </Label>
                <Input
                  id="yeartenth"
                  name="yeartenth"
                  type="month"
                  style={{ border: "2px solid #594545" }}
                  placeholder="Completion Year"
                  value={data.yeartenth}
                  onChange={handleData}
                ></Input>
              </FormGroup>
            </Col>
          </Row>

          <S.Smalltext>12th (if any)</S.Smalltext>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label
                  for="institutiontwelve"
                  style={{
                    color: "#594545",
                    fontWeight: 630,
                    fontSize: "1.1em",
                  }}
                >
                  Institution Name
                </Label>
                <Input
                  id="institutiontwelve"
                  name="institutiontwelve"
                  placeholder="Institution Name"
                  style={{ border: "2px solid #594545" }}
                  value={data.institutiontwelve}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <Label
                  for="statetwelve"
                  style={{
                    color: "#594545",
                    fontWeight: 630,
                    fontSize: "1.1em",
                  }}
                >
                  State
                </Label>
                <Input
                  id="statetwelve"
                  name="statetwelve"
                  placeholder="State"
                  style={{ border: "2px solid #594545" }}
                  value={data.statetwelve}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label
                  for="scoretwelve"
                  style={{
                    color: "#594545",
                    fontWeight: 630,
                    fontSize: "1.1em",
                  }}
                >
                  Score
                </Label>
                <Input
                  id="scoretwelve"
                  name="scoretwelve"
                  type="number"
                  placeholder="Score"
                  style={{ border: "2px solid #594545" }}
                  value={data.scoretwelve}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label
                  for="yeartwelve"
                  style={{
                    color: "#594545",
                    fontWeight: 630,
                    fontSize: "1.1em",
                  }}
                >
                  Completion year
                </Label>
                <Input
                  id="yeartwelve"
                  name="yeartwelve"
                  type="month"
                  style={{ border: "2px solid #594545" }}
                  placeholder="Completion Year"
                  value={data.yeartwelve}
                  onChange={handleData}
                ></Input>
              </FormGroup>
            </Col>
          </Row>

          <S.Smalltext>Bachelors (if any)</S.Smalltext>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label
                  for="institutionbachelor"
                  style={{
                    color: "#594545",
                    fontWeight: 630,
                    fontSize: "1.1em",
                  }}
                >
                  Institution Name
                </Label>
                <Input
                  id="institutionbachelor"
                  name="institutionbachelor"
                  style={{ border: "2px solid #594545" }}
                  placeholder="Institution Name"
                  value={data.institutionbachelor}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <Label
                  for="statebachelor"
                  style={{
                    color: "#594545",
                    fontWeight: 630,
                    fontSize: "1.1em",
                  }}
                >
                  State
                </Label>
                <Input
                  id="statebachelor"
                  name="statebachelor"
                  placeholder="State"
                  style={{ border: "2px solid #594545" }}
                  value={data.statebachelor}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label
                  for="scorebachelor"
                  style={{
                    color: "#594545",
                    fontWeight: 630,
                    fontSize: "1.1em",
                  }}
                >
                  Score
                </Label>
                <Input
                  id="scorebachelor"
                  name="scorebachelor"
                  type="number"
                  style={{ border: "2px solid #594545" }}
                  placeholder="Score"
                  value={data.scorebachelor}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label
                  for="yearbachelor"
                  style={{
                    color: "#594545",
                    fontWeight: 630,
                    fontSize: "1.1em",
                  }}
                >
                  Completion year
                </Label>
                <Input
                  id="yearbachelor"
                  name="yearbachelor"
                  type="month"
                  style={{ border: "2px solid #594545" }}
                  placeholder="Completion Year"
                  value={data.yearbachelor}
                  onChange={handleData}
                ></Input>
              </FormGroup>
            </Col>
          </Row>

          <S.Smalltext>Postgraduation (if any)</S.Smalltext>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label
                  for="institutionpostgraduate"
                  style={{
                    color: "#594545",
                    fontWeight: 630,
                    fontSize: "1.1em",
                  }}
                >
                  Institution Name
                </Label>
                <Input
                  id="institutionpostgraduate"
                  name="institutionpostgraduate"
                  style={{ border: "2px solid #594545" }}
                  placeholder="Institution Name"
                  value={data.institutionpostgraduate}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <Label
                  for="statepostgraduate"
                  style={{
                    color: "#594545",
                    fontWeight: 630,
                    fontSize: "1.1em",
                  }}
                >
                  State
                </Label>
                <Input
                  id="statepostgraduate"
                  name="statepostgraduate"
                  placeholder="State"
                  style={{ border: "2px solid #594545" }}
                  value={data.statepostgraduate}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label
                  for="scorepostgraduate"
                  style={{
                    color: "#594545",
                    fontWeight: 630,
                    fontSize: "1.1em",
                  }}
                >
                  Score
                </Label>
                <Input
                  id="scorepostgraduate"
                  name="scorepostgraduate"
                  placeholder="Score"
                  type="number"
                  style={{ border: "2px solid #594545" }}
                  value={data.scorepostgraduate}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label
                  for="yearpostgraduate"
                  style={{
                    color: "#594545",
                    fontWeight: 630,
                    fontSize: "1.1em",
                  }}
                >
                  Completion year
                </Label>
                <Input
                  id="yearpostgraduate"
                  name="yearpostgraduate"
                  type="month"
                  style={{ border: "2px solid #594545" }}
                  placeholder="Completion Year"
                  value={data.yearpostgraduate}
                  onChange={handleData}
                ></Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <S.ButtonWrap>
              <Button
                variant="contained"
                style={{ backgroundColor: "#03175C", color: "white" }}
                type="submit"
                disabled={!data}
                // onClick={postData}
              >
                Submit
              </Button>
            </S.ButtonWrap>
          </Row>
        </Form>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Response Submitted! Give us few days to contact you!
          </Alert>
        </Snackbar>
      </S.SecSection>
      <S.Section>
        <S.Copyrighttext>Copyright 2022 - We are Developers</S.Copyrighttext>
      </S.Section>
    </S.Wrap>
  );
};

export default Homepage;
