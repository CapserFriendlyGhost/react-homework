import React from "react";
import styled from "styled-components";

const S = {
  StyledMenuItem: styled.button`
    width: 20%;
    height: 100%;
    font-size: 16px;
    font-weight: 700;
    background-color: #d0e7ff;
    border: none;

    &:hover {
      background-color: #558fcb;
      border-radius: 5px;
      border-bottom: 3px solid #0b4076;
      border-top: 3px solid #0b4076;
      color: white;
      cursor: pointer;
    }
  `,
};

function MenuItem({ text, onClick }) {
  return <S.StyledMenuItem onClick={onClick}>{text}</S.StyledMenuItem>;
}

export default MenuItem;
