import React from "react";
import MenuItem from "./Menuitem";

function Menu({
  toggleAboutMePage,
  toggleCharactersListPage,
  toggleToDoPage,
  toggleContactPage,
  toggleDialogPage,
  toggleComponentsPage,
}) {
  return (
    <>
      <MenuItem key="1" text="O mnie" onClick={toggleAboutMePage} />
      <MenuItem
        key="2"
        text="Lista Postaci"
        onClick={toggleCharactersListPage}
      />
      <MenuItem key="3" text="Todo" onClick={toggleToDoPage} />
      <MenuItem key="4" text="Kontakt" onClick={toggleContactPage} />
      <MenuItem key="5" text="Dialog" onClick={toggleDialogPage} />
      <MenuItem key="6" text="Komponenty" onClick={toggleComponentsPage} />
    </>
  );
}

export default Menu;
