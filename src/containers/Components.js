import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function Components() {
  return (
    <div>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button
          sx={{ color: "red", border: "1px solid red", hover: "pink" }}
          variant="outlined"
        >
          Outlined
        </Button>
      </Stack>
      <Box width={300}>
        <Slider
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </Box>
    </div>
  );
}

export default Components;
