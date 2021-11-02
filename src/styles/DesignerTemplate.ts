import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  cv: {
    background: "white",
    width: "21cm",
    height: "29.7cm",
    display: "block",
    marginBottom: "0.5cm ",
    boxShadow: "0 0 0.5cm rgba(0,0,0,0.5)",
    position: "relative",
  },
  root: {
    display: "grid",
    gridTemplateColumns: "30% 70%",
    height: "100%",
  },
});
