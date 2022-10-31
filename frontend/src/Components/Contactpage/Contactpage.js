import React, { useState } from "react";
import * as S from "./style";
import { CONTACTDATA } from "./config/data";
import Header from "../Header/Header";
import Card from "@mui/material/Card";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Contactpage() {
  return (
    <S.Wrap>
      <Header />
      <S.MainSection>
        <S.Text>Get in touch</S.Text>
      </S.MainSection>
      <S.SecSection>
        <Card sx={{ minWidth: 350, maxWidth: 360, minHeight: 150, my: 2 }}>
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

        <Card sx={{ minWidth: 350, maxWidth: 360, minHeight: 150, my: 2 }}>
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

        <Card sx={{ minWidth: 350, maxWidth: 360, minHeight: 150, my: 2 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Address <RoomIcon style={{ color: "orange" }} />
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {/* <S.Anchor href={`https://google.com/${CONTACTDATA.address}`}>
            {CONTACTDATA.address}
          </S.Anchor> */}
              {CONTACTDATA.address}
            </Typography>
          </CardContent>
        </Card>
      </S.SecSection>

      <S.ThirdSection>
        <S.LeftDiv>I am left</S.LeftDiv>
        <S.RightDiv>I am Right</S.RightDiv>
      </S.ThirdSection>
    </S.Wrap>
  );
}

export default Contactpage;
