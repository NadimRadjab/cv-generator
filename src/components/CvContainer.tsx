import { Button, Container } from "@mui/material";
import React, { useState } from "react";
import Pdf from "react-to-pdf";
import { useAppSelector } from "../redux/hooks";
import DesignerTemplate from "../components/CVTemplates/Designer/DesignerTemplate";
import ClassicTemplate from "./CVTemplates/Classic/ClassicTemplate";
import CasualTemplate from "./CVTemplates/Casual/CasualTemplate";
const CvContainer = () => {
  const [ref, setRef] = useState<React.LegacyRef<HTMLDivElement>>(null);
  const template = useAppSelector((state) => state.classic);
  const handleRef = (ref: React.LegacyRef<HTMLDivElement>) => {
    setRef(ref);
  };
  let cv;
  if (template.cvIdentifire === "designer-01") {
    cv = <DesignerTemplate handleRef={handleRef} />;
  } else if (template.cvIdentifire === "casual-01") {
    cv = <CasualTemplate handleRef={handleRef} />;
  } else cv = <ClassicTemplate handleRef={handleRef} />;
  return (
    <Container
      sx={{
        p: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Pdf targetRef={ref} filename="cv.pdf">
        {({ toPdf }: any) => {
          return (
            <Button variant="contained" sx={{ mb: 4 }} onClick={toPdf}>
              Download Pdf
            </Button>
          );
        }}
      </Pdf>
      {cv}
    </Container>
  );
};

export default CvContainer;
