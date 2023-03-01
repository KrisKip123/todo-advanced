import { Button } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import { CreateToDo } from "../CreateToDo/CreateToDo";

import { FC, PropsWithChildren, useState } from "react";

import { Modal } from "../../../../../../components/Modal/Modal";

export const AddToDo: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        endIcon={<AddIcon />}
        variant="contained"
      >
        {children}
      </Button>
      <Modal isOpen={isOpen} closeModal={() => setIsOpen(!isOpen)}>
        <CreateToDo />
      </Modal>
    </>
  );
};
