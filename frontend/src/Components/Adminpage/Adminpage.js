import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Form, FormGroup, Input, Label } from "reactstrap";
import axios from 'axios';
import DataCard from "../Card/Card"
import HeaderLogin from "../HeaderLogin/HeaderLogin";
import { CSVLink } from "react-csv";
import { Button } from "@mui/material";

function Adminpage() {
  const [searchterm, setSearchterm] = useState("");
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
  const [getdata, setGetdata] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/getdata") 
    .then(response => {
      setGetdata(response.data);
    })
  }, [])

  return (
    <S.Wrap>
      <HeaderLogin />
      <S.MainSection>
        <S.Text>Welcome Admin!</S.Text>
      </S.MainSection>

      <S.SecSection>
        <S.UppertextSec>Form filled by:</S.UppertextSec>
        <CSVLink filename={"Students_Data.csv"} data={getdata} headers={headers}>
        <Button style={{float: "right"}} variant="text">Download All</Button>
        </CSVLink>
        <S.Search>
          <Form>
            <FormGroup>
              <Input
                type="text"
                name="search"
                id="search"
                placeholder="Student Name"
                style={{ width: "11em" }}
                onChange={(event) => {
                  setSearchterm(event.target.value);
                }}
              />
            </FormGroup>
          </Form>
        </S.Search>
      </S.SecSection>

      <S.Card>
        {getdata.sort((a, b) => a.name.localeCompare(b.name)).filter((val) => {
          if (searchterm == "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchterm.toLowerCase())
          ) {
            return val;
          }
        }).map((val, key) => {
          return (
            val ? <DataCard val={val} getdata={getdata} key={key} /> : <h1>No Record</h1>

            // <Card key={key} sx={{ minWidth: 300, maxWidth: 320 , my: 4 }}>
            //   <CardContent>
            //     <Typography gutterBottom variant="h5" component="div">
            //       {val.name}
            //     </Typography>
            //     <Typography variant="body2" color="text.secondary">
            //       Father's Name: {val.fathername}
            //     </Typography>
            //     <Typography variant="body2" color="text.secondary">
            //       Age: {val.age}
            //     </Typography>
            //     <Typography variant="body2" color="text.secondary">
            //       Phone number: {val.phonenumber}
            //     </Typography>
            //     <Typography variant="body2" color="text.secondary">
            //       Alternative number:{" "}
            //       {val.altphonenumber ? val.altphonenumber : <span>-</span>}
            //     </Typography>
            //     <Typography variant="body2" color="text.secondary">
            //       Recent education: {val.education}
            //     </Typography>
            //     <Typography variant="body2" color="text.secondary">
            //       Institution name: {val.institution}
            //     </Typography>
            //     <Typography variant="body2" color="text.secondary">
            //       Cgpa/percetage: {val.score}
            //     </Typography>
            //     <Typography variant="body2" color="text.secondary">
            //       Email: {val.email ? val.email : <span>-</span>}
            //     </Typography>
            //     <Typography variant="body2" color="text.secondary">
            //       Address: {val.address}
            //     </Typography>
            //   </CardContent>
            //   <CardActions style={{float: "right"}}>
            //     <S.Anchor href={`tel:${val.phonenumber}`}><CallIcon /></S.Anchor>
            //     {val.email==="" ? <S.Anchor><MailIcon color="disabled" /></S.Anchor> : <S.Anchor href={`mailto:${val.email}`}><MailIcon /></S.Anchor>}
            //   </CardActions>
            // </Card>
          );
        })}
      </S.Card>

      <S.Copyrighttext>Copyright 2022 - We are Developers</S.Copyrighttext>
    </S.Wrap>
  );
}

export default Adminpage;
