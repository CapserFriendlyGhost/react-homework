import "./App.css";
import { useState, useEffect } from "react";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import AboutMe from "./containers/AboutMe";
import CharactersList from "./containers/CharactersList";
import Todo from "./containers/Todo";
import Contact from "./containers/Contact";
import Dialog from "./containers/Dialog";
import Components from "./containers/Components";
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
    border-bottom: 2px solid #0b4076;
    border-top: 2px solid #0b4076;
    border-radius: 3px;
  `,
  StyledMenu: styled.div`
    width: 47%;
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
  const [dialogPage, setDialogPage] = useState(false);
  const [componentsPage, setComponentsPage] = useState(false);
  const [characters, setCharacters] = useState([]);

  const toggleAboutMePage = () => {
    setAboutMePage(true);
    setCharacterListPage(false);
    setToDoPage(false);
    setContactPage(false);
    setDialogPage(false);
    setComponentsPage(false);
  };
  const toggleCharactersListPage = () => {
    setAboutMePage(false);
    setCharacterListPage(true);
    setToDoPage(false);
    setContactPage(false);
    setDialogPage(false);
    setComponentsPage(false);
  };
  const toggleToDoPage = () => {
    setAboutMePage(false);
    setCharacterListPage(false);
    setToDoPage(true);
    setContactPage(false);
    setDialogPage(false);
    setComponentsPage(false);
  };
  const toggleContactPage = () => {
    setAboutMePage(false);
    setCharacterListPage(false);
    setToDoPage(false);
    setContactPage(true);
    setDialogPage(false);
    setComponentsPage(false);
  };
  const toggleDialogPage = () => {
    setAboutMePage(false);
    setCharacterListPage(false);
    setToDoPage(false);
    setContactPage(false);
    setDialogPage(true);
    setComponentsPage(false);
  };
  const toggleComponentsPage = () => {
    setAboutMePage(false);
    setCharacterListPage(false);
    setToDoPage(false);
    setContactPage(false);
    setDialogPage(false);
    setComponentsPage(true);
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
          <Menu
            toggleAboutMePage={toggleAboutMePage}
            toggleCharactersListPage={toggleCharactersListPage}
            toggleToDoPage={toggleToDoPage}
            toggleContactPage={toggleContactPage}
            toggleDialogPage={toggleDialogPage}
            toggleComponentsPage={toggleComponentsPage}
          />
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
      {dialogPage && <Dialog />}
      {componentsPage && <Components />}
    </div>
  );
}

export default App;
