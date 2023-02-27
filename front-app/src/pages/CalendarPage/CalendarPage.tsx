import { Container, Box } from "@mui/material";

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
      maxWidth={false}
      disableGutters
      sx={{
        padding: "10px",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <DatePicker />
      </Box>
      <div>1</div>
    </Container>
  );
};
