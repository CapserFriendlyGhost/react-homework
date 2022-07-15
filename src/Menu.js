import React from "react";
import MenuItem from "./Menuitem";

const buttonName = ["O mnie", "Lista Postaci", "Todo", "Kontakt"];
function Menu() {
  const aboutMe = () => {
    return console.log("click");
  };
  return (
    <div>
      <MenuItem
        key={buttonName[0]}
        text={buttonName[0]}
        onClick={aboutMe}
      ></MenuItem>
      <MenuItem key={buttonName[1]} text={buttonName[1]}></MenuItem>
      <MenuItem key={buttonName[2]} text={buttonName[2]}></MenuItem>
      <MenuItem key={buttonName[3]} text={buttonName[3]}></MenuItem>
    </div>
  );
}

export default Menu;
