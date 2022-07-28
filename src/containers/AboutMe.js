import React from "react";
import { useState } from "react";
import image from "../assets/jaro-flowers.png";
import AddTextLogo from "../components/AddTextLogo";
import styled from "styled-components";

const S = {
  StyledAboutMePage: styled.div`
    width: 95%;
    height: 70%;
    margin: 2% 3%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    & > img {
      width: 35%;
      height: 75%;
      border-radius: 30px;
      border: 2px solid #0b4076;
    }
  `,
  StyledDisctription: styled.div`
    width: 35%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background-color: #558fcb;
    border-radius: 30px;
    border: 2px solid #0b4076;

    & > div {
      margin: 0 1%;
      width: 100%;
      height: 20%;
      &:first-child {
        font-size: 32px;
      }
    }
  `,
};

function AboutMe({ setUpdateLogoText }) {
  const [inputValue, setInputValue] = useState("");

  const updateLogoText = () => {
    setUpdateLogoText(inputValue);
  };

  return (
    <S.StyledAboutMePage>
      <img src={image} alt=""></img>
      <S.StyledDisctription>
        <div className="about-me-page-description-name">Jarek</div>
        <div>
          Wielki umysł, strateg, zbawca narodu polskiego. Filantrop, myśliciel.
          Człowiek wielkiego formatu. Godny zaufania. Miłośnik zwierząt, w
          szczególności kotowatych. Wspaniały mąż stanu, ojciec wszyskich
          Polaków.
        </div>
        <div>
          <AddTextLogo
            text={"Zaktualizuj logo"}
            onChange={(event) => setInputValue(event.target.value)}
            onClick={updateLogoText}
          />
        </div>
      </S.StyledDisctription>
    </S.StyledAboutMePage>
  );
}

export default AboutMe;
