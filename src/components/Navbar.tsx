import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "react-router-dom";
import { global } from "../styles/global";
import { Typography } from "@mui/material";

const Navbar = () => {
  const classes = global();
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
            <NavLink className={classes.link} to="/" color="inherit">
              Home
            </NavLink>
            <NavLink className={classes.link} to="/preview">
              Preview
            </NavLink>
            <NavLink className={classes.link} to="/" color="inherit">
              View Example
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
