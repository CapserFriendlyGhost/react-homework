import "./App.css";
// import Menu from "./Menu";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import MenuItem from "./Menuitem";
import AboutMe from "./components/AboutMe";
import CharactersList from "./components/CharactersList";
import Todo from "./components/Todo";
import Contact from "./components/Contact";

function App() {
  const [logo, setLogo] = useState(true);
  const [updateLogoText, setUpdateLogoText] = useState("");
  const [aboutMePage, setAboutMePage] = useState(false);
  const [charactersListPage, setCharacterListPage] = useState(false);
  const [toDoPage, setToDoPage] = useState(false);
  const [contactPage, setContactPage] = useState(false);
  const [characters, setCharacters] = useState([]);

  const toggleAboutMePage = () => {
    setAboutMePage(!aboutMePage);
    setCharacterListPage(false);
    setToDoPage(false);
    setContactPage(false);
  };
  const toggleCharactersListPage = () => {
    setAboutMePage(false);
    setCharacterListPage(!charactersListPage);
    setToDoPage(false);
    setContactPage(false);
  };
  const toggleToDoPage = () => {
    setAboutMePage(false);
    setCharacterListPage(false);
    setToDoPage(!toDoPage);
    setContactPage(false);
  };
  const toggleContactPage = () => {
    setAboutMePage(false);
    setCharacterListPage(false);
    setToDoPage(false);
    setContactPage(!contactPage);
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const json = await response.json();
      setCharacters(json);
    };
    fetchData();
  }, [charactersListPage]);

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
