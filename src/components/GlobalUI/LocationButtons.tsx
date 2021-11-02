import { Button, Box } from "@mui/material";
import React from "react";
import { useHistory } from "react-router";
type Props = {
  location: string;
};
const LocationButtons = (props: Props) => {
  const history = useHistory();
  return (
    <Box
      sx={{
        display: "flex",
        margin: 2,
        justifyContent: "center",
      }}
    >
      <Button
        sx={{ mr: 4 }}
        variant="contained"
        color="error"
        onClick={() => history.goBack()}
      >
        Back
      </Button>
      <Button
        variant="contained"
        onClick={() => history.push(`${props.location}`)}
      >
        Next
      </Button>
    </Box>
  );
};

export default LocationButtons;
