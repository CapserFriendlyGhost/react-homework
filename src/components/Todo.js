import React from "react";
import { useState } from "react";
import LogoButton from "./LogoButton";

function Todo({ logo, setLogo }) {
  const [itemList, setItemList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const takeInputValue = (event) => {
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
    setLogo(!logo);
  };

  return (
    <div className="todo-list-page">
      <div className="todo-list-container">
        <div className="todo-list-buttons">
          <input
            onChange={takeInputValue}
            value={inputValue}
            placeholder="Dopisz do listy..."
          ></input>
          <button onClick={addToList}>Dodaj do listy</button>
          <LogoButton
            onClick={handleClickLogo}
            text={logo ? "Nowe Logo" : "Logo"}
          />
        </div>
        <div>
          {itemList.map((item) => {
            return (
              <li key={item} onClick={removeItem}>
                {item}
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
