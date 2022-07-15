import React from "react";

function AddTextLogo({ text, onChange, onClick }) {
  return (
    <div className="input-button-edit-logo">
      <input onChange={onChange} placeholder="Podaj nową nazwę loga..."></input>
      <button onClick={onClick}>{text}</button>
    </div>
  );
}

export default AddTextLogo;
