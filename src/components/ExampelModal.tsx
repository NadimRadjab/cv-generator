import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useAppSelector } from "../redux/hooks";
const ExampelModal = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const template = useAppSelector((state) => state.classic.exampleImage);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        style={{
          color: props.isMenu ? "black" : "white",
          margin: props.isMenu ? 4 : 0,
        }}
        onClick={handleClickOpen}
      >
        {props.isMenu ? "Example" : " View Example"}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Example Cv</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img style={{ width: "85%" }} src={template} alt="example-img" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ExampelModal;
