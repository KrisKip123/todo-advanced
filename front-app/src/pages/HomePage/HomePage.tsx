import { motion } from "framer-motion";

import { pageAnimation } from "../../constants/animation";

import { Box, Container } from "@mui/material";
import { Welcome } from "./components/Welcome/Welcome";

export const HomePage = () => {
  return (
    <Container
      component={motion.section}
      initial={"initial"}
      animate={"in"}
      exit={"out"}
      variants={pageAnimation}
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Welcome nameUser={"KRISKIP123"} />
      </Box>
    </Container>
  );
};
