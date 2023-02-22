import { FC } from "react";
import { PropsWithChildren } from "react";

import Container from "@mui/material/Container/Container";

export const LayoutMain: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container
      component={"main"}
      maxWidth={false}
      disableGutters
      sx={{ display: "flex", flex: "1" }}
    >
      {children}
    </Container>
  );
};
