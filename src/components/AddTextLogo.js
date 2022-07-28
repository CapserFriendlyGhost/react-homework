import React from "react";
import styled from "styled-components";

function AddTextLogo({ text, onChange, onClick }) {
  return (
    <div>
      <input onChange={onChange} placeholder="Podaj nową nazwę loga..."></input>
      <button onClick={onClick}>{text}</button>
    </div>
  );
}

export default AddTextLogo;
