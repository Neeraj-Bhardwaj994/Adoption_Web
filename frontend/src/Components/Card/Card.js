import React from "react";
import * as S from "./style";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CSVLink } from "react-csv";
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import DownloadIcon from '@mui/icons-material/Download';
import { Button } from '@mui/material';

function DataCard({val, getdata, key}) {

  const headers = [
    {label: 'Name', key: 'name'},
    {label: "Father's Name", key: 'fathername'},
    {label: 'Age', key: 'age'},
    {label: 'Address', key: 'address'},
    {label: 'Phone number', key: 'phonenumber'},

    {label: '10th Institution Name', key: 'institutiontenth'},
    {label: '10th State', key: 'statetenth'},
    {label: '10th Score', key: 'scoretenth'},
    {label: '10th Completion year', key: 'yeartenth'},

    {label: '12th Institution Name', key: 'institutiontwelve'},
    {label: '12th State', key: 'statetwelve'},
    {label: '12th Score', key: 'scoretwelve'},
    {label: '12th Completion year', key: 'yeartwelve'},

    {label: 'Bachelor Institution Name', key: 'institutionbachelor'},
    {label: 'Bachelor State', key: 'statebachelor'},
    {label: 'Bachelor Score', key: 'scorebachelor'},
    {label: 'Bachelor Completion year', key: 'yearbachelor'},

    {label: 'Post Graduation Institution Name', key: 'institutionpostgraduate'},
    {label: 'Post Graduation State', key: 'statepostgraduate'},
    {label: 'Post Graduation Score', key: 'scorepostgraduate'},
    {label: 'Post Graduation Completion year', key: 'yearpostgraduate'},


    {label: 'Institution Name', key: 'institution'},
    {label: 'CGPA/Percentage', key: 'score'},
    {label: 'Email', key: 'email'},
    {label: 'Alternative Phone Number', key: 'altphonenumber'},
  ]

  return (
    <S.Wrap>
      <Card sx={{ minWidth: 360, maxWidth: 360, my: 4 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {val.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <span style={{fontWeight: "bold"}}>Father's Name:</span> {val.fathername}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <span style={{fontWeight: "bold"}}>Age:</span> {val.age}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <span style={{fontWeight: "bold"}}>Income:</span> {val.income}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <span style={{fontWeight: "bold"}}>Phone number:</span> {val.phonenumber}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <span style={{fontWeight: "bold"}}>Alternative number:</span>{" "}
                  {val.altphonenumber ? val.altphonenumber : <span>-</span>}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                <span style={{fontWeight: "bold"}}>10th Institution name: </span>{val.institutiontenth ? val.institutiontenth : <span>-</span>}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <span style={{fontWeight: "bold"}}>10th State:</span> {val.statetenth ? val.statetenth : <span>-</span>}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <span style={{fontWeight: "bold"}}>10th Score:</span> {val.scoretenth ? val.scoretenth : <span>-</span>}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <span style={{fontWeight: "bold"}}>10th Year:</span> {val.yeartenth ? val.yeartenth : <span>-</span>}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                <span style={{fontWeight: "bold"}}>12th Institution name:</span> {val.institutiontwelve ? val.institutiontwelve : <span>-</span>}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <span style={{fontWeight: "bold"}}>12th State:</span> {val.statetwelve ? val.statetwelve : <span>-</span>}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <span style={{fontWeight: "bold"}}>12th Score:</span> {val.scoretwelve ? val.scoretwelve : <span>-</span>}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <span style={{fontWeight: "bold"}}>12th year:</span> {val.yeartwelve ? val.yeartwelve : <span>-</span>}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                <span style={{fontWeight: "bold"}}>Bachelor Institution name:</span> {val.institutionbachelor ? val.institutionbachelor : <span>-</span>}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <span style={{fontWeight: "bold"}}>Bachelor State:</span> {val.statebachelor ? val.statebachelor : <span>-</span>}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <span style={{fontWeight: "bold"}}>Bachelor Score:</span> {val.scorebachelor ? val.scorebachelor : <span>-</span>}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <span style={{fontWeight: "bold"}}>Bachelor year:</span> {val.yearbachelor ? val.yearbachelor : <span>-</span>}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                <span style={{fontWeight: "bold"}}>Postgraduation Institution name:</span> {val.institutionpostgraduate ? val.institutionpostgraduate : <span>-</span>}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <span style={{fontWeight: "bold"}}>Postgraduation State:</span> {val.statepostgraduate ? val.statepostgraduate : <span>-</span>}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <span style={{fontWeight: "bold"}}>Postgraduation Score:</span> {val.scorepostgraduate ? val.scorepostgraduate : <span>-</span>}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <span style={{fontWeight: "bold"}}>Postgraduation year:</span> {val.yearpostgraduate ? val.yearpostgraduate : <span>-</span>}
                </Typography>



                <Typography variant="body2" color="text.secondary">
                <span style={{fontWeight: "bold"}}>Email:</span> {val.email ? val.email : <span>-</span>}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                <span style={{fontWeight: "bold"}}>Address:</span> {val.address}
                </Typography>
              </CardContent>
              <CardActions style={{float: "right"}}>
                <S.Anchor href={`tel:${val.phonenumber}`}><CallIcon /></S.Anchor>
                {val.email==="" ? <S.Anchor><MailIcon color="disabled" /></S.Anchor> : <S.Anchor href={`mailto:${val.email}`}><MailIcon /></S.Anchor>}
                {<S.Anchor><CSVLink data={getdata} headers={headers}><DownloadIcon /></CSVLink> </S.Anchor>}
              </CardActions>
            </Card>
    </S.Wrap>
  );
}

export default DataCard;
