import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import NotificationsIcon from '@mui/icons-material/Notifications';
import DataCard from "../Card/Card";
import ContactCard from "../QueryCard/QueryCard"
import HeaderLogin from "../HeaderLogin/HeaderLogin";
import { CSVLink } from "react-csv";
import { Button } from "@mui/material";
import Pagination from "../Pagination/Pagination";
import Loading from "../Loader/Loader";
import Badge from "@mui/material/Badge";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

function Adminpage() {
  const [getdata, setGetdata] = useState([]);
  const [getquerydata, setGetquerydata] = useState([]);
  const [searchterm, setSearchterm] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentpage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(1);
  const [modaldata, setModaldata] = useState([]);
  const querylength = getquerydata.length;
  const [state, setState] = React.useState({
    right: false,
  });

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
      const fetchingData = await axios
        .get("http://localhost:3000/getdata")
        .then((response) => {
          setGetdata(response.data);
          setLoading(false);
        });
      const fetchingContactData = await axios
        .get("http://localhost:3000/getcontactdata")
        .then((response) => {
          setGetquerydata(response.data);
        });
    }
    fetchData();
  }, []);

  const getMoredetails = async (id) => {
    const fetchingModalData = await axios
      .get(`http://localhost:3000/getdata/${id}`)
      .then((response) => {
        setModaldata(response.data);
      });
  };

  // const deleteCard = (id) => {
  //   axios.delete(`http://localhost:3000/getdata/${id}`).then((result) => {
  //     result.json().then((res) => {
  //       console.log(res)
  //     })
  //   })
  // }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                Hello
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <S.Wrap>
      <HeaderLogin />
      <S.MainSection>
        <S.Text>Welcome Admin!</S.Text>
      </S.MainSection>

      <S.SecSection>
        <S.UppertextSec>Form filled by:</S.UppertextSec>
        <Badge badgeContent={querylength} color="primary" style={{ float: "right" }}>
        <NotificationsIcon style={{ float: "right", color: "#03175C", cursor: "pointer", marginLeft: "0.2em" }} onClick={toggleDrawer("right", true)}/>
          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            <S.QueryText>Want to connect:</S.QueryText>
            {getquerydata.map((value, key) => {
              return(
                <ContactCard key={key} value={value} />
              )
            })}
          </Drawer>
        </Badge>
        <CSVLink
          filename={"All_Students_Data.csv"}
          data={getdata}
          headers={headers}
        >
          <Button style={{ float: "right", color: "#03175C" }} variant="text">
            Download
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
          <h4 style={{ color: "black" }}>
            <Loading />
          </h4>
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
                <DataCard
                  val={val}
                  getdata={getdata}
                  key={key}
                  getMoredetails={getMoredetails}
                  modaldata={modaldata}
                />
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

      <S.Copyrighttext>Copyright 2022 - Sabar Foundation</S.Copyrighttext>
    </S.Wrap>
  );
}

export default Adminpage;
