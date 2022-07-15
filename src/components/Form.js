import React from "react";
import { useState } from "react";

function Form() {
  const [inputsValue, setInputsValue] = useState({ email: "", content: "" });
  const [emailContent, setEmailContent] = useState([]);

  const addInputsValue = () => {
    const newContent = [...emailContent, inputsValue];
    setEmailContent(newContent);
    setInputsValue({ email: "", content: "" });
  };

  return (
    <div>
      <div className="container-form-button">
        <form className="form">
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
              id="content-input"
            />
          </label>
        </form>
        <button onClick={addInputsValue}>Wyślij</button>
      </div>

      {emailContent.map((item, index) => {
        return (
          <div key={index} className="registration">
            <div>{`Email: ${item.email}`}</div>
            <div>{`Treść: ${item.content}`}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Form;
