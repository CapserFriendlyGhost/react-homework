import React from "react";

function LogoButton({ onClick, text }) {
  return <button onClick={onClick}>{text}</button>;
}

export default LogoButton;
