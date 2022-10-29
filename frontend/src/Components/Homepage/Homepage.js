import React, { useState } from "react";
import * as S from "./style";
import Header from "../Header/Header";
import axios from "axios";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
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

  const [errors, setErrors] = useState({});
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
  const handleData = (e) => {
    e.preventDefault();
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
    console.log(newdata);
  };

  const handleSubmit = () => {
    console.log();
  };

  const validateForm = () => {
    const { name, fathername, age, income, address, phonenumber } = data;

    if (!name && name.length == 0) {
      setErrors(true);
    }
    if (!fathername && fathername.length == 0) {
      setErrors(true);
    }
    if (!age && age.length == 0) {
      setErrors(true);
    }
  };

  const handleReset = () => {};

  const postData = async (e) => {
    e.preventDefault();
    validateForm();
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
        yeartenth: parseInt(data.yeartenth),

        institutiontwelve: data.institutiontwelve,
        statetwelve: data.statetwelve,
        scoretwelve: parseFloat(data.scoretwelve),
        yeartwelve: parseInt(data.yeartwelve),

        institutionbachelor: data.institutionbachelor,
        statebachelor: data.statebachelor,
        scorebachelor: parseFloat(data.scorebachelor),
        yearbachelor: parseInt(data.yearbachelor),

        institutionpostgraduate: data.institutionpostgraduate,
        statepostgraduate: data.statepostgraduate,
        scorepostgraduate: parseFloat(data.scorepostgraduate),
        yearpostgraduate: parseInt(data.yearpostgraduate),

        email: data.email,
        altphonenumber: parseInt(data.altphonenumber),
      });
      console.log(res.data);
      navigate("/success");
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
                <Label for="name">Name*</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  value={data.name}
                  onChange={handleData}
                  required
                />
                {errors && data.name.length<=0 ? <FormFeedback>Name is required</FormFeedback>: ""}
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="fathername">Father's Name*</Label>
                <Input
                  id="fathername"
                  name="fathername"
                  placeholder="Father's Name"
                  type="text"
                  value={data.fathername}
                  onChange={handleData}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="age">Age*</Label>
                <Input
                  id="age"
                  name="age"
                  placeholder="Age"
                  type="number"
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
                <Label for="income">Annual income of the family*</Label>
                <Input
                  id="income"
                  name="income"
                  placeholder="Income"
                  type="select"
                  value={data.income}
                  onChange={handleData}
                  required
                >
                  {" "}
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
                <Label for="phonenumber">Phone*</Label>
                <Input
                  id="phonenumber"
                  name="phonenumber"
                  placeholder="890XXXXXX"
                  type="number"
                  value={data.phonenumber}
                  onChange={handleData}
                  required
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label for="address">Address*</Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="Address"
                  type="text"
                  value={data.address}
                  onChange={handleData}
                  required
                />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Email (optional)"
                  type="email"
                  value={data.email}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <Label for="altphonenumber">Alternate Phone</Label>
                <Input
                  id="altphonenumber"
                  name="altphonenumber"
                  placeholder="Alternate (optional)"
                  type="number"
                  value={data.altphonenumber}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>
          </Row>

          <S.UppertextSec>Educational Details</S.UppertextSec>
          <S.Smalltext>10th</S.Smalltext>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="institutiontenth">Institution Name</Label>
                <Input
                  id="institutiontenth"
                  name="institutiontenth"
                  placeholder="Institution Name"
                  value={data.institutiontenth}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <Label for="statetenth">State</Label>
                <Input
                  id="statetenth"
                  name="statetenth"
                  placeholder="State"
                  value={data.statetenth}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="scoretenth">Score</Label>
                <Input
                  id="scoretenth"
                  name="scoretenth"
                  placeholder="Score"
                  type="number"
                  value={data.scoretenth}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="yeartenth">Completion year</Label>
                <Input
                  id="yeartenth"
                  name="yeartenth"
                  type="number"
                  placeholder="Completion Year"
                  value={data.yeartenth}
                  onChange={handleData}
                ></Input>
              </FormGroup>
            </Col>
          </Row>

          <S.Smalltext>12th</S.Smalltext>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="institutiontwelve">Institution Name</Label>
                <Input
                  id="institutiontwelve"
                  name="institutiontwelve"
                  placeholder="Institution Name"
                  value={data.institutiontwelve}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <Label for="statetwelve">State</Label>
                <Input
                  id="statetwelve"
                  name="statetwelve"
                  placeholder="State"
                  value={data.statetwelve}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="scoretwelve">Score</Label>
                <Input
                  id="scoretwelve"
                  name="scoretwelve"
                  type="number"
                  placeholder="Score"
                  value={data.scoretwelve}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="yeartwelve">Completion year</Label>
                <Input
                  id="yeartwelve"
                  name="yeartwelve"
                  type="number"
                  placeholder="Completion Year"
                  value={data.yeartwelve}
                  onChange={handleData}
                ></Input>
              </FormGroup>
            </Col>
          </Row>

          <S.Smalltext>Bachelors</S.Smalltext>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="institutionbachelor">Institution Name</Label>
                <Input
                  id="institutionbachelor"
                  name="institutionbachelor"
                  placeholder="Institution Name"
                  value={data.institutionbachelor}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <Label for="statebachelor">State</Label>
                <Input
                  id="statebachelor"
                  name="statebachelor"
                  placeholder="State"
                  value={data.statebachelor}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="scorebachelor">Score</Label>
                <Input
                  id="scorebachelor"
                  name="scorebachelor"
                  type="number"
                  placeholder="Score"
                  value={data.scorebachelor}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="yearbachelor">Completion year</Label>
                <Input
                  id="yearbachelor"
                  name="yearbachelor"
                  type="number"
                  placeholder="Completion Year"
                  value={data.yearbachelor}
                  onChange={handleData}
                ></Input>
              </FormGroup>
            </Col>
          </Row>

          <S.Smalltext>Postgraduation</S.Smalltext>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="institutionpostgraduate">Institution Name</Label>
                <Input
                  id="institutionpostgraduate"
                  name="institutionpostgraduate"
                  placeholder="Institution Name"
                  value={data.institutionpostgraduate}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>

            <Col md={3}>
              <FormGroup>
                <Label for="statepostgraduate">State</Label>
                <Input
                  id="statepostgraduate"
                  name="statepostgraduate"
                  placeholder="State"
                  value={data.statepostgraduate}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="scorepostgraduate">Score</Label>
                <Input
                  id="scorepostgraduate"
                  name="scorepostgraduate"
                  placeholder="Score"
                  type="number"
                  value={data.scorepostgraduate}
                  onChange={handleData}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label for="yearpostgraduate">Completion year</Label>
                <Input
                  id="yearpostgraduate"
                  name="yearpostgraduate"
                  type="number"
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
                style={{ backgroundColor: "yellow", color: "black" }}
                type="submit"
                // onClick={postData}
              >
                Submit
              </Button>
            </S.ButtonWrap>
          </Row>
        </Form>
      </S.SecSection>
      <S.Section>
        <S.Copyrighttext>Copyright 2022 - We are Developers</S.Copyrighttext>
      </S.Section>
    </S.Wrap>
  );
};

export default Homepage;
