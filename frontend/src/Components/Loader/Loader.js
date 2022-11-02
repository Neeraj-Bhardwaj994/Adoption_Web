import React from "react";
import Lottie from "lottie-react";
import * as S from "./style"
import LoaderAnimation from "./Loader.json";

const Loader = () => {
  return (
    <S.Wrap>
      <Lottie animationData={LoaderAnimation} loop={true} />;
    </S.Wrap>
  );
};

export default Loader;
