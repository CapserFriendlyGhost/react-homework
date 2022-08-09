import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { useState } from "react";
import styled2 from "styled-components";

const GreenSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: green[600],
    "&:hover": {
      backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: green[600],
  },
}));

const S = {
  StyledComponentsWrapper: styled2.div`
    width: 95%;
    height: 70vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `,
};
function Components() {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <S.StyledComponentsWrapper>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button
          sx={{
            color: "red",
            border: "1px solid red",
          }}
          variant="outlined"
        >
          Outlined
        </Button>
      </Stack>
      <Box width={300}>
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
          max={200}
        />
      </Box>
      <GreenSwitch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      <div>{checked ? "Dark" : "Light"}</div>
    </S.StyledComponentsWrapper>
  );
}

export default Components;
