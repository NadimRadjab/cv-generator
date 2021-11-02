import React from "react";
import AwardsForm from "./AwardsForm";
import CertificateForm from "./CertificateForm";
import { Button, Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  addAwardsData,
  addCertificationsData,
} from "../../../redux/features/ClassicTemplate/infoSlice";
import LocationButtons from "../../GlobalUI/LocationButtons";
const AwardsCertificate = () => {
  const template = useAppSelector((state) => state.classic);
  const dispatch = useAppDispatch();
  const handleCertification = () => {
    dispatch(addCertificationsData());
  };

  const handleAwardsData = () => {
    dispatch(addAwardsData());
  };
  return (
    <Box
      sx={{
        alignSelf: "flex-start",
        width: "100%",
        mt: 2,
        textAlign: "center",
      }}
    >
      <LocationButtons location={"/form/extr"} />
      <Typography fontSize={19}>Awards & Certifications</Typography>
      <Box>
        {template.certifications.map((info) => {
          return <CertificateForm key={info.id} info={info} />;
        })}
        <Box>
          <Button onClick={handleCertification}>Add Certificate</Button>
        </Box>
      </Box>
      <Box>
        {template.awards.map((info) => {
          return <AwardsForm key={info.id} info={info} />;
        })}
        <Box>
          <Button onClick={handleAwardsData}>Add Award</Button>
        </Box>
      </Box>
    </Box>
  );
};
export default AwardsCertificate;
