import React from "react";

function MenuItem({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

export default MenuItem;
