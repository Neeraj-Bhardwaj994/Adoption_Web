import React, { useState } from "react";
import * as S from "./style";

import Header from "../Header/Header";

import {
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import { Box, Button } from "@mui/material";

function Contactpage() {
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
              <Form>
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
                      Phone*
                    </Label>
                    <Input
                      id="phonenumber"
                      name="phonenumber"
                      placeholder="890xxxxxxx"
                      type="number"
                      style={{ border: "2px solid #594545" }}
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
      <S.Copyrighttext>Copyright 2022 - We are Developers</S.Copyrighttext>
    </S.Wrap>
  );
}

export default Contactpage;
