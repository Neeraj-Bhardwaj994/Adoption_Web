import React from "react";
import * as S from "./style";
import { ANYNAME } from '../Footer/config/data';
import Header from "../Header/Header";

function SuccessfulPage() {
  return <S.Wrap>
    <Header />
    <S.Section>
    <S.Uppertext>Thankyou for giving us all the necessary information.</S.Uppertext>
    <S.Lowertext>Give us few days to contact you!</S.Lowertext>
    </S.Section>
  </S.Wrap>;
}

export default SuccessfulPage;
