import React from "react";

import { Container } from "@mui/material";

export const Footer = () => {
  return (
    <Container
      component={"footer"}
      maxWidth={false}
      disableGutters
      sx={{ height: "100px", backgroundColor: "red" }}
    ></Container>
  );
};
