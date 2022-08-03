import React from "react";
import { useState } from "react";
import LogoButton from "../components/LogoButton";
import styled from "styled-components";

const S = {
  StyledTodoPage: styled.div`
    width: 95%;
    height: 70%;
    display: flex;
    justify-content: center;
  `,
  StyledTodoWindow: styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 2px solid #0b4076;
    border-radius: 30px;
    background-color: #558fcb;
    & > div {
      width: 100%;
      height: 30%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      & > input {
        width: 25%;
        height: 20%;
        border: 2px solid #0b4076;
        border-radius: 5px;
        background-color: #d0e7ff;
      }
      & button {
        width: 25%;
        height: 25%;
        margin-left: 5px;
        border: 2px solid #0b4076;
        border-radius: 5px;
        font-weight: 700;
        background-color: #d0e7ff;
        &:hover {
          border: 2px solid #ffffff;
          color: white;
          background-color: #0b4076;
          cursor: pointer;
        }
      }
    }
  `,
  StyledList: styled.ul`
    padding-left: 5%;
    margin: 0;
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;
    & > li {
      cursor: pointer;
    }
  `,
};

function Todo({ logo, setLogo }) {
  const [itemList, setItemList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };
  const addToList = () => {
    const newItems = [...itemList, inputValue];
    setItemList(newItems);
    setInputValue("");
  };
  const removeItem = (event) => {
    const clickedItem = event.target.innerText;
    setItemList(itemList.filter((item) => item !== clickedItem));
  };
  const handleClickLogo = () => {
    setLogo((logo) => !logo);
  };

  return (
    <S.StyledTodoPage>
      <S.StyledTodoWindow>
        <div>
          <input
            onChange={handleInputValue}
            value={inputValue}
            placeholder="Dopisz do listy..."
          ></input>
          <button onClick={addToList}>Dodaj do listy</button>
          <LogoButton
            onClick={handleClickLogo}
            text={logo ? "Nowe Logo" : "Logo"}
          />
        </div>
        <S.StyledList>
          {itemList.map((item) => {
            return (
              <li key={item} onClick={removeItem}>
                {item}
              </li>
            );
          })}
        </S.StyledList>
      </S.StyledTodoWindow>
    </S.StyledTodoPage>
  );
}

export default Todo;
