import React from "react";
import * as S from "./style";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import DownloadIcon from "@mui/icons-material/Download";
import Tooltip from "@mui/material/Tooltip";

const QueryCard = ({ value }) => {
  return (
    <S.Wrap>
      <Card
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          border: "1px solid lightgrey",
          borderRadius: 20,
          display: "flex",
        }}
        sx={{ minWidth: 290, maxWidth: 350, my: 1, mx: 1 }}
      >
        <CardContent>
          <Tooltip title={value.name}>
            <Typography gutterBottom variant="h9" component="div">
              {value.name.slice(0, 17) + "..."}
            </Typography>
          </Tooltip>
          {/* <Typography gutterBottom variant="h9" component="div">
            {value.phonenumber ? value.phonenumber : "--"}
          </Typography>
          <Typography gutterBottom variant="h9" component="div">
            {value.email ? value.email : "--"}
          </Typography> */}
        </CardContent>
        <CardActions style={{ float: "right !important" }}>
          <S.Anchor href={`tel:${value.phonenumber}`}>
            <CallIcon style={{ color: "#269d54" }} />
          </S.Anchor>
          {value.email === "" ? (
            <S.Anchor>
              <MailIcon color="disabled" />
            </S.Anchor>
          ) : (
            <S.Anchor href={`mailto:${value.email}`}>
              <MailIcon style={{ color: "#004F9F" }} />
            </S.Anchor>
          )}
        </CardActions>
      </Card>
    </S.Wrap>
  );
};
export default QueryCard;
