import React from "react";
import * as S from "./style";
import { ANYNAME } from "../Footer/config/data";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function Pagenotfound() {
  return (
    <S.Wrap>
      <Header />
      <S.Section>
        <S.Text>This page doesn't exist! <Link to="/" style={{color: "#594545"}}>Go Back</Link></S.Text>
      </S.Section>
    </S.Wrap>
  );
}

export default Pagenotfound;
