import { Container } from "@mui/material";

import { motion } from "framer-motion";

import { pageAnimation } from "../../constants/animation";

import { DatePicker } from "./components/DatePicker/DatePicker";

export const CalendarPage = () => {
  return (
    <Container
      component={motion.section}
      initial={"initial"}
      animate={"in"}
      exit={"out"}
      variants={pageAnimation}
      sx={{
        padding: "10px",
      }}
      maxWidth={false}
      disableGutters
    >
      <DatePicker />
      <div>Staticks</div>
    </Container>
  );
};
