import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button, Typography } from "@mui/material";
import ExampelModal from "./ExampelModal";
import { useHistory } from "react-router";
import { useAppSelector } from "../redux/hooks";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";

const Navbar = () => {
  const history = useHistory();
  const template = useAppSelector((state) => state.classic);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();

  const MenuItems = () => {
    return (
      <div className={classes.menuItems}>
        <Button
          id="demo-positioned-button"
          aria-controls="demo-positioned-menu"
          sx={{ color: "white" }}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MenuIcon />
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem
            onClick={() => {
              history.push("/");
              handleClose();
            }}
          >
            Home
          </MenuItem>
          <MenuItem
            onClick={() => {
              history.push("/preview");

              handleClose();
            }}
          >
            Preview
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
            }}
          >
            <ExampelModal />
          </MenuItem>
        </Menu>
      </div>
    );
  };
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
            {template.cvIdentifire.length ? <MenuItems /> : null}

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
const useStyles = makeStyles({
  menuItems: {},
});
export default Navbar;
