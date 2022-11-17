import React, { useState } from "react";
import * as S from "./style";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <S.Wrap>
      <S.Logo href="/">
        <S.Img src={"Sabar_Logo_img.jpg"} alt="Sabar Logo"></S.Img>
      </S.Logo>
      <S.Navbar>
        <S.Navitems>
          <Link
            to="/"
            style={{
              color: "#03175C",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Home
          </Link>
        </S.Navitems>
        <S.Navitems>
          <Link
            to="/about"
            style={{
              color: "#03175C",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            About
          </Link>
        </S.Navitems>
        <S.Navitems>
          <Link
            to="/contact"
            style={{
              color: "#03175C",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Contact
          </Link>
        </S.Navitems>

        <S.Ham>
          <MenuIcon
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            style={{ color: "#03175C", fontSize: "1.8em" }}
          ></MenuIcon>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/" style={{ color: "#000", textDecoration: "none" }}>
                Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/about"
                style={{ color: "#000", textDecoration: "none" }}
              >
                About
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/contact"
                style={{ color: "#000", textDecoration: "none" }}
              >
                Contact
              </Link>
            </MenuItem>
          </Menu>
        </S.Ham>
      </S.Navbar>
    </S.Wrap>
  );
};

export default Header;
