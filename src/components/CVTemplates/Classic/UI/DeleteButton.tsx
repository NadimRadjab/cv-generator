import { Button } from "@mui/material";
import React from "react";

type Props = {
  children: string;
  onRemove: () => void;
};
const DeleteButton = (props: Props) => {
  return (
    <Button
      sx={{
        width: 20,
        height: 40,
        alignSelf: "flex-end",
        justifySelf: "flex-end",
        p: 2,
        m: 3,
      }}
      color="error"
      onClick={() => props.onRemove()}
    >
      {props.children}
    </Button>
  );
};

export default DeleteButton;
