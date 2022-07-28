import React from "react";

import CharacterCard from "../components/CharacterCard";

function CharactersList({ charactersListPage, characters }) {
  return (
    <div className="characters-list-page">
      {charactersListPage &&
        characters.results.map((character) => {
          return (
            <CharacterCard
              key={character.name}
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
