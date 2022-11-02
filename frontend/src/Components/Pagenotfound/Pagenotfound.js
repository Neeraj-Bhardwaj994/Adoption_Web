import React from "react";
import * as S from "./style";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function Pagenotfound() {
  return (
    <S.Wrap>
      <Header />
      <S.Section>
        <S.Text>
          This page doesn't exist!{" "}
          <Link to="/" style={{ color: "#FBAF41" }}>
            Go Back
          </Link>
        </S.Text>
      </S.Section>
    </S.Wrap>
  );
}

export default Pagenotfound;
