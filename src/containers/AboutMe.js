import React from "react";
import { useState } from "react";
import image from "../assets/jaro-flowers.png";
import AddTextLogo from "../components/AddTextLogo";

function AboutMe({ setUpdateLogoText }) {
  const [inputValue, setInputValue] = useState("");

  const updateLogoText = () => {
    setUpdateLogoText(inputValue);
  };

  return (
    <div className="about-me-page">
      <img src={image} alt=""></img>
      <div className="about-me-page-description">
        <div className="about-me-page-description-name">Jarosław K.</div>
        <div>
          Wielki umysł, strateg, zbawca narodu polskiego. Filantrop, myśliciel.
          Człowiek wielkiego formatu. Godny zaufania. Miłośnik zwierząt, w
          szczególności kotowatych. Wspaniały mąż stanu, ojciec wszyskich
          Polaków.
        </div>

        <AddTextLogo
          text={"Zaktualizuj logo"}
          onChange={(event) => setInputValue(event.target.value)}
          onClick={updateLogoText}
        />
      </div>
    </div>
  );
}

export default AboutMe;
