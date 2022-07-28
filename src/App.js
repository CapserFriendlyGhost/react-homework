import "./App.css";
// import Menu from "./Menu";
import { useState, useEffect } from "react";
import Logo from "./components/Logo";
import MenuItem from "./components/Menuitem";
import AboutMe from "./containers/AboutMe";
import CharactersList from "./containers/CharactersList";
import Todo from "./containers/Todo";
import Contact from "./containers/Contact";

function App() {
  const [logo, setLogo] = useState(true);
  const [updateLogoText, setUpdateLogoText] = useState("");
  const [aboutMePage, setAboutMePage] = useState(true);
  const [charactersListPage, setCharacterListPage] = useState(false);
  const [toDoPage, setToDoPage] = useState(false);
  const [contactPage, setContactPage] = useState(false);
  const [characters, setCharacters] = useState([]);

  const toggleAboutMePage = () => {
    setAboutMePage((prevState) => !prevState);
    setCharacterListPage(false);
    setToDoPage(false);
    setContactPage(false);
  };
  const toggleCharactersListPage = () => {
    setAboutMePage(false);
    setCharacterListPage((prevState) => !prevState);
    setToDoPage(false);
    setContactPage(false);
  };
  const toggleToDoPage = () => {
    setAboutMePage(false);
    setCharacterListPage(false);
    setToDoPage((prevState) => !prevState);
    setContactPage(false);
  };
  const toggleContactPage = () => {
    setAboutMePage(false);
    setCharacterListPage(false);
    setToDoPage(false);
    setContactPage((prevState) => !prevState);
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
      <div className="logo-menu-bar">
        <Logo
          text={logo ? `Logo ${updateLogoText}` : `Nowe Logo ${updateLogoText}`}
        />
        <div className="menuitem-buttons">
          <MenuItem key="1" text="O mnie" onClick={toggleAboutMePage} />
          <MenuItem
            key="2"
            text="Lista Postaci"
            onClick={toggleCharactersListPage}
          />
          <MenuItem key="3" text="Todo" onClick={toggleToDoPage} />
          <MenuItem key="4" text="Kontakt" onClick={toggleContactPage} />
        </div>
      </div>
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

// const toggleAboutMePage = () => {
//   setAboutMePage(!aboutMePage);
//   setCharacterListPage(false);
//   setToDoPage(false);
//   setContactPage(false);
// };
// const toggleCharactersListPage = () => {
//   setAboutMePage(false);
//   setCharacterListPage(!charactersListPage);
//   setToDoPage(false);
//   setContactPage(false);
// };
// const toggleToDoPage = () => {
//   setAboutMePage(false);
//   setCharacterListPage(false);
//   setToDoPage(!toDoPage);
//   setContactPage(false);
// };
// const toggleContactPage = () => {
//   setAboutMePage(false);
//   setCharacterListPage(false);
//   setToDoPage(false);
//   setContactPage(!contactPage);
// };
