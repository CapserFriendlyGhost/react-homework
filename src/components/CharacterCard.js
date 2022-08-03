import React from "react";
import styled from "styled-components";

const S = {
  StyledCharacterCard: styled.div`
    width: 20%;
    height: 50vh;
    margin: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-content: space-evenly;
    border: 2px solid #0b4076;
    border-radius: 30px;
    background-color: #558fcb;
    font-size: 16px;
    font-weight: 600;
    & > div {
      & > img {
        border: 2px solid #0b4076;
        border-radius: 30px;
      }
    }
  `,
};

function CharacterCard({ name, alive, image, species }) {
  return (
    <S.StyledCharacterCard>
      <div>
        <img src={image} alt=""></img>
      </div>
      <div>{name}</div>
      <div>{alive}</div>
      <div>{species}</div>
    </S.StyledCharacterCard>
  );
}

export default CharacterCard;
