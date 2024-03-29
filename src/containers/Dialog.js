import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import styled from "styled-components";

const S = {
  StyledDialogWrapper: styled.div`
    width: 95%;
    height: 70vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `,
};

export default function DialogComponent() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("");
  const [level, setLevel] = useState("");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value || "");
  };
  const handleLevelChange = (event) => {
    setLevel(event.target.value || "");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <S.StyledDialogWrapper>
      <Button onClick={handleClickOpen}>Open select dialog</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel
                htmlFor="demo-dialog-native"
                sx={{ backgroundColor: "white", paddingRight: "5px" }}
              >
                Language
              </InputLabel>
              <Select
                value={language}
                onChange={handleLanguageChange}
                input={<OutlinedInput label="Language" />}
              >
                <MenuItem value="Html">Html</MenuItem>
                <MenuItem value="Css">Css</MenuItem>
                <MenuItem value="Javascript">Javascript</MenuItem>
                <MenuItem value="React">React</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel
                id="demo-dialog-select-label"
                sx={{ backgroundColor: "white", paddingRight: "5px" }}
              >
                Level
              </InputLabel>
              <Select
                value={level}
                onChange={handleLevelChange}
                input={<OutlinedInput label="Level" />}
              >
                <MenuItem value="Junior">Junior</MenuItem>
                <MenuItem value="Mid">Mid</MenuItem>
                <MenuItem value="Senior">Senior</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
      <div>
        <h1>
          {language} {level}
        </h1>
      </div>
    </S.StyledDialogWrapper>
  );
}
