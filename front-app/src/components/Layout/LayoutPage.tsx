import { FC, PropsWithChildren } from "react";

import { Container } from "@mui/material";

import { motion } from "framer-motion";

import { pageAnimation } from "../../constants/animation";

export const LayoutPage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container
      component={motion.section}
      initial={"initial"}
      animate={"in"}
      exit={"out"}
      variants={pageAnimation}
      maxWidth={false}
      disableGutters
    >
      {children}
    </Container>
  );
};
