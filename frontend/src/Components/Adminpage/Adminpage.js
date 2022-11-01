import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import DataCard from "../Card/Card";
import HeaderLogin from "../HeaderLogin/HeaderLogin";
import { CSVLink } from "react-csv";
import { Button } from "@mui/material";
import Pagination from "../Pagination/Pagination";

function Adminpage() {
  const [getdata, setGetdata] = useState([]);
  const [searchterm, setSearchterm] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentpage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(1);
  const [modaldata, setModaldata] = useState([]);

  const lastcardindex = currentpage * cardPerPage;
  const firstcardindex = lastcardindex - cardPerPage;
  const currentCards = getdata.slice(firstcardindex, lastcardindex);

  const headers = [
    { label: "Name", key: "name" },
    { label: "Father's Name", key: "fathername" },
    { label: "Age", key: "age" },
    { label: "Address", key: "address" },
    { label: "Phone number", key: "phonenumber" },

    { label: "10th Institution Name", key: "institutiontenth" },
    { label: "10th State", key: "statetenth" },
    { label: "10th Score", key: "scoretenth" },
    { label: "10th Completion year", key: "yeartenth" },

    { label: "12th Institution Name", key: "institutiontwelve" },
    { label: "12th State", key: "statetwelve" },
    { label: "12th Score", key: "scoretwelve" },
    { label: "12th Completion year", key: "yeartwelve" },

    { label: "Bachelor Institution Name", key: "institutionbachelor" },
    { label: "Bachelor State", key: "statebachelor" },
    { label: "Bachelor Score", key: "scorebachelor" },
    { label: "Bachelor Completion year", key: "yearbachelor" },

    {
      label: "Post Graduation Institution Name",
      key: "institutionpostgraduate",
    },
    { label: "Post Graduation State", key: "statepostgraduate" },
    { label: "Post Graduation Score", key: "scorepostgraduate" },
    { label: "Post Graduation Completion year", key: "yearpostgraduate" },

    { label: "Email", key: "email" },
    { label: "Alternative Phone Number", key: "altphonenumber" },
  ];
  

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const fetcthingData = await axios
        .get("http://localhost:3000/getdata")
        .then((response) => {
          setGetdata(response.data);
          setLoading(false);
        });
    }
    fetchData();
  }, []);

  const getMoredetails = async (id) => {
    const fetcthingModalData = await axios
    .get(`http://localhost:3000/getdata/${id}`)
    .then((response) => {
      setModaldata(response.data);
    })
  }
  
  // const deleteCard = (id) => {
  //   axios.delete(`http://localhost:3000/getdata/${id}`).then((result) => {
  //     result.json().then((res) => {
  //       console.log(res)
  //     })
  //   })
  // }

  return (
    <S.Wrap>
      <HeaderLogin />
      <S.MainSection>
        <S.Text>Welcome Admin!</S.Text>
      </S.MainSection>

      <S.SecSection>
        <S.UppertextSec>Form filled by:</S.UppertextSec>
        <CSVLink
          filename={"All_Students_Data.csv"}
          data={getdata}
          headers={headers}
        >
          <Button style={{ float: "right",color: "#03175C"  }} variant="text">
            Download All
          </Button>
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
        {loading ? (
          <h4 style={{ color: "black" }}>Loading...</h4>
        ) : (
          getdata
            .sort((a, b) => a.name.localeCompare(b.name))
            .filter((val) => {
              if (searchterm == "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchterm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val, key) => {
              return val ? (
                <DataCard val={val} getdata={getdata} key={key} getMoredetails={getMoredetails} modaldata={modaldata} />
              ) : (
                <h4>No Record</h4>
              );
            })
        )}
      </S.Card>

      {/* <Pagination
        totalCards={getdata.length}
        cardPerPage={cardPerPage}
        setCurrentpage={setCurrentpage}
      /> */}

      <S.Copyrighttext>Copyright 2022 - We are Developers</S.Copyrighttext>
    </S.Wrap>
  );
}

export default Adminpage;
