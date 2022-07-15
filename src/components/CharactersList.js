import React from "react";

import CharacterCard from "./CharacterCard";

function CharactersList({ charactersListPage, characters }) {
  return (
    <div className="characters-list-page">
      {charactersListPage &&
        characters.results.map((character, index) => {
          return (
            <CharacterCard
              key={index}
              image={character.image}
              name={character.name}
              alive={character.status}
            />
          );
        })}
    </div>
  );
}

export default CharactersList;
