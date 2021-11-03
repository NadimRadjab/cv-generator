import { makeStyles } from "@mui/styles";

export const global = makeStyles({
  cv: {
    background: "white",
    width: "21cm",
    height: "29.7cm",
    display: "block",
    marginBottom: "0.5cm ",
    boxShadow: "0 0 0.5cm rgba(0,0,0,0.5)",
  },
  link: {
    color: "white",
    textDecoration: "none",
    "&:hover": {},
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "30% 70%",
    height: "100%",
  },
});
