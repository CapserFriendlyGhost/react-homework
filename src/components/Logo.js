import React from "react";
import styled from "styled-components";

const S = {
  StyledLogo: styled.div`
    width: 25%;
    margin-left: 2.8%;
    font-size: 32px;
    font-weight: 700;
  `,
};

function Logo({ text }) {
  return <S.StyledLogo>{text}</S.StyledLogo>;
}

export default Logo;
