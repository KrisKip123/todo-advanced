import Container from "@mui/material/Container/Container";

import { motion } from "framer-motion";

import { pageAnimation } from "../../constants/animation";
import { Clock } from "../../components/Clock/Clock";

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
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Clock />
        <div>date</div>
        <div>welcome</div>
      </div>
    </Container>
  );
};
