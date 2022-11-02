import React from "react";
import * as S from "./style";
import Header from "../Header/Header";
import { Avatar, Box } from "@mui/material";
import { CONTACTDATA } from "./config/data";
import Card from "@mui/material/Card";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Aboutpage() {
  return (
    <S.Wrap>
      <Header />
      <S.LeftText>About us</S.LeftText>
      <S.HighlightText>Sabar Foundation</S.HighlightText>
      <S.ThirdSection>
        <S.LeftDiv></S.LeftDiv>
        <S.RightDiv>
          <S.FormDiv>
            <Box
              sx={{
                width: "20em",
                height: "20em",
              }}
            >
              <S.Heading>Sabar Foundation</S.Heading>
              <S.Para>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </S.Para>
            </Box>
          </S.FormDiv>
        </S.RightDiv>
      </S.ThirdSection>
      <S.SecSection>
        <Card
          sx={{ minWidth: 350, maxWidth: 360, minHeight: 150, my: 2 }}
          style={{
            backgroundColor: "#FFE8C3",
            opacity: 0.8,
            borderRadius: 20,
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            border: "none",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Email <EmailIcon style={{ color: "blue" }} />
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              <S.Anchor href={`mailto:${CONTACTDATA.email}`}>
                {CONTACTDATA.email}
              </S.Anchor>
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{ minWidth: 350, maxWidth: 360, minHeight: 150, my: 2 }}
          style={{
            backgroundColor: "#FAC6DF",
            opacity: 0.8,
            borderRadius: 20,
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            border: "none",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Phone <PhoneIcon style={{ color: "green" }} />
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              <S.Anchor href={`tel:${CONTACTDATA.phone}`}>
                {CONTACTDATA.phone}
              </S.Anchor>
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{ minWidth: 350, maxWidth: 360, minHeight: 150, my: 2 }}
          style={{
            backgroundColor: "#DCCEFE",
            opacity: 0.8,
            borderRadius: 20,
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            border: "none",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Address <RoomIcon style={{ color: "orange" }} />
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {CONTACTDATA.address}
            </Typography>
          </CardContent>
        </Card>
      </S.SecSection>
      <S.Copyrighttext>Copyright 2022 - Sabar Foundation</S.Copyrighttext>
    </S.Wrap>
  );
}

export default Aboutpage;
