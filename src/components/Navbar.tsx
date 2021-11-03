import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "react-router-dom";
import { global } from "../styles/global";
import { Button, Typography } from "@mui/material";
import ExampelModal from "./ExampelModal";
import { useHistory } from "react-router";
import { useAppSelector } from "../redux/hooks";
const Navbar = () => {
  const classes = global();
  const history = useHistory();
  const template = useAppSelector((state) => state.classic);
  return (
    <Box sx={{ width: "100%" }}>
      <AppBar
        position="static"
        sx={{ height: 80, alignItems: "center", justifyContent: "center" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "85%",
          }}
        >
          <Typography sx={{ ml: 5 }} variant="h4">
            Simple CV
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "40%",
            }}
          >
            <Button
              style={{ color: "white" }}
              variant="outlined"
              onClick={() => history.push("/")}
            >
              Home
            </Button>
            {template.cvIdentifire.length ? (
              <Box sx={{ display: "flex" }}>
                <Button
                  style={{ color: "white" }}
                  variant="outlined"
                  onClick={() => history.push("/preview")}
                >
                  Preview
                </Button>
                <ExampelModal />
              </Box>
            ) : null}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
