import Container from "@mui/material/Container/Container";

import { motion } from "framer-motion";

export const HomePage = () => {
  return (
    <Container
      component={motion.section}
      initial={{
        y: "-120%",
      }}
      animate={{
        y: 0,
      }}
      exit={{
        y: "120%",
      }}
      transition={{
        duration: 0.8,
        ease: "easeIn",
      }}
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>KRISKIP123</div>
    </Container>
  );
};
