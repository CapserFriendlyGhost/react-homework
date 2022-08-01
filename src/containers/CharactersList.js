import React from "react";
import styled from "styled-components";

import CharacterCard from "../components/CharacterCard";

const S = {
  StyledCharacterList: styled.div`
    width: 95%;
    margin: 2% 3%;
    display: flex;
    justify-content: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  `,
};

function CharactersList({ charactersListPage, characters }) {
  return (
    <S.StyledCharacterList>
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
    </S.StyledCharacterList>
  );
}

export default CharactersList;
