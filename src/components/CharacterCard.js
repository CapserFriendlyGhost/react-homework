import React from "react";

function CharacterCard({ name, alive, image }) {
  return (
    <div className="character-card">
      <div>
        <img src={image} alt=""></img>
      </div>
      <div>{name}</div>
      <div>{alive}</div>
    </div>
  );
}

export default CharacterCard;
