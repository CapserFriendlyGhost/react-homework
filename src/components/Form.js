import React from "react";
import { useState } from "react";
import styled from "styled-components";

const S = {
  StyledWindowWrapper: styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 2px solid #0b4076;
    border-radius: 30px;
    background-color: #558fcb;
    & > div:first-of-type {
      margin: 3%;
      width: 94%;
      height: 20%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & > form {
        width: 100%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        & > label {
          width: 100%;
          height: 40%;
          & > input {
            width: 50%;
            height: 100%;
            margin-left: 1%;
            border: 2px solid #0b4076;
            border-radius: 7px;
            background-color: #d0e7ff;
          }
        }
      }
      & > button {
        width: 20%;
        height: 20%;
        margin-left: 9.5%;
        border: 2px solid #0b4076;
        border-radius: 7px;
        font-weight: 700;
        background-color: #d0e7ff;
        &:hover {
          border: 2px solid #ffffff;
          color: white;
          background-color: #0b4076;
          cursor: pointer;
        }
        &:active {
          background-color: #0b4076;
          transform: translateY(4px);
        }
      }
    }
  `,
  StyledRegistration: styled.div`
    margin: 3%;
    width: 94%;
    height: 70%;

    & > div {
      margin: 2%;
      border: 2px solid #0b4076;
      border-radius: 7px;
      background-color: #d0e7ff;
      word-wrap: break-word;
    }
  `,
};

function Form() {
  const [inputsValue, setInputsValue] = useState({ email: "", content: "" });
  const [emailContent, setEmailContent] = useState([]);

  const addInputsValue = () => {
    const newContent = [...emailContent, inputsValue];
    setEmailContent(newContent);
    setInputsValue({ email: "", content: "" });
  };

  return (
    <S.StyledWindowWrapper>
      <div>
        <form>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={inputsValue.email}
              onChange={(e) =>
                setInputsValue({ ...inputsValue, email: e.target.value })
              }
            />
          </label>

          <label>
            Treść:
            <input
              type="text"
              name="content"
              value={inputsValue.content}
              onChange={(e) =>
                setInputsValue({ ...inputsValue, content: e.target.value })
              }
            />
          </label>
        </form>
        <button onClick={addInputsValue}>Wyślij</button>
      </div>
      <S.StyledRegistration>
        {emailContent.map((item, index) => {
          return (
            <div key={index}>
              <div>{`Email: ${item.email}`}</div>
              <div>{`Treść: ${item.content}`}</div>
            </div>
          );
        })}
      </S.StyledRegistration>
    </S.StyledWindowWrapper>
  );
}

export default Form;
