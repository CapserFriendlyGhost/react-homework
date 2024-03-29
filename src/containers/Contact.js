import React from "react";
import Form from "../components/Form";
import styled from "styled-components";

const S = {
  StyledContactPage: styled.div`
    width: 95%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

function Contact() {
  return (
    <S.StyledContactPage>
      <Form />
    </S.StyledContactPage>
  );
}

export default Contact;
