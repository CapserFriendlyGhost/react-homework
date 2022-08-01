import React from "react";
import styled from "styled-components";

const S = {
  StyledContaiter: styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;

    & > input {
      width: 30%;
      height: 80%;
      border: 2px solid #0b4076;
      border-radius: 7px;
      background-color: #d0e7ff;
    }
    & > button {
      width: 30%;
      height: 100%;
      margin-left: 5px;
      border: 2px solid #0b4076;
      border-radius: 7px;
      font-weight: 700;
      background-color: #d0e7ff;
      &:hover {
        border: 2px solid #ffffff;
        color: white;
        background-color: #0b4076;
        cursor: pointer;
      }
    }
  `,
};

function AddTextLogo({ text, onChange, onClick }) {
  return (
    <S.StyledContaiter>
      <input onChange={onChange} placeholder="Podaj nową nazwę loga..."></input>
      <button onClick={onClick}>{text}</button>
    </S.StyledContaiter>
  );
}

export default AddTextLogo;
