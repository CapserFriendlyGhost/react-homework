import "./App.css";
import { useState, useEffect } from "react";
import Logo from "./components/Logo";
import MenuItem from "./components/Menuitem";
import AboutMe from "./containers/AboutMe";
import CharactersList from "./containers/CharactersList";
import Todo from "./containers/Todo";
import Contact from "./containers/Contact";
import styled from "styled-components";

const S = {
  StyledNavbar: styled.div`
    width: 95%;
    height: 15%;
    margin: 2% 3%;
    display: flex;
    flex-direction: row;
    background-color: #d0e7ff;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #0b4076;
    border-top: 1px solid #0b4076;
    border-radius: 3px;
  `,
  StyledMenu: styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    justify-content: space-around;
  `,
};

function App() {
  const [logo, setLogo] = useState(true);
  const [updateLogoText, setUpdateLogoText] = useState("");
  const [aboutMePage, setAboutMePage] = useState(true);
  const [charactersListPage, setCharacterListPage] = useState(false);
  const [toDoPage, setToDoPage] = useState(false);
  const [contactPage, setContactPage] = useState(false);
  const [characters, setCharacters] = useState([]);

  const toggleAboutMePage = () => {
    setAboutMePage(true);
    setCharacterListPage(false);
    setToDoPage(false);
    setContactPage(false);
  };
  const toggleCharactersListPage = () => {
    setAboutMePage(false);
    setCharacterListPage(true);
    setToDoPage(false);
    setContactPage(false);
  };
  const toggleToDoPage = () => {
    setAboutMePage(false);
    setCharacterListPage(false);
    setToDoPage(true);
    setContactPage(false);
  };
  const toggleContactPage = () => {
    setAboutMePage(false);
    setCharacterListPage(false);
    setToDoPage(false);
    setContactPage(true);
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const json = await response.json();
      setCharacters(json);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <S.StyledNavbar>
        <Logo
          text={logo ? `Logo ${updateLogoText}` : `Nowe Logo ${updateLogoText}`}
        />
        <S.StyledMenu>
          <MenuItem key="1" text="O mnie" onClick={toggleAboutMePage} />
          <MenuItem
            key="2"
            text="Lista Postaci"
            onClick={toggleCharactersListPage}
          />
          <MenuItem key="3" text="Todo" onClick={toggleToDoPage} />
          <MenuItem key="4" text="Kontakt" onClick={toggleContactPage} />
        </S.StyledMenu>
      </S.StyledNavbar>
      {aboutMePage && <AboutMe setUpdateLogoText={setUpdateLogoText} />}
      {charactersListPage && (
        <CharactersList
          charactersListPage={charactersListPage}
          characters={characters}
        />
      )}
      {toDoPage && <Todo setLogo={setLogo} logo={logo} />}
      {contactPage && <Contact />}
    </div>
  );
}

export default App;
