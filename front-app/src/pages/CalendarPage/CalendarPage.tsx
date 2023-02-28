import { Container } from "@mui/material";

import { motion } from "framer-motion";
import { Modal } from "../../components/Modal/Modal";

import { pageAnimation } from "../../constants/animation";

import { DatePicker } from "./components/DatePicker/DatePicker";
import { ManagerToDo } from "./components/ManagerToDo/ManagerToDo";
import { useState } from "react";

export const CalendarPage = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <Container
      component={motion.section}
      initial={"initial"}
      animate={"in"}
      exit={"out"}
      variants={pageAnimation}
      sx={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
      maxWidth={false}
      disableGutters
    >
      <DatePicker />
      <ManagerToDo onClick={() => setIsOpenModal(!isOpenModal)} />
      <Modal
        isOpen={isOpenModal}
        closeModal={() => {
          setIsOpenModal(!isOpenModal);
        }}
      >
        <div>1</div>
      </Modal>
    </Container>
  );
};
