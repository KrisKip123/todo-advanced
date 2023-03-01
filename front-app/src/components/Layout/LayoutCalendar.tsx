import { FC, PropsWithChildren } from "react";

import { Container } from "@mui/material";
import { motion } from "framer-motion";

import { pageAnimation } from "../../constants/animation";

export const LayoutCalendar: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container
      component={motion.section}
      initial={"initial"}
      animate={"in"}
      exit={"out"}
      variants={pageAnimation}
      sx={{
        padding: "10px",
        // display: "flex",
        // flexDirection: "column",
        // gap: "20px",
      }}
      maxWidth={false}
      disableGutters
    >
      {children}
    </Container>
  );
};
