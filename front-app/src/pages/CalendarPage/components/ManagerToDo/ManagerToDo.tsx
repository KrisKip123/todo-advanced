import styleScss from "./managerToDo.module.scss";
import { Button } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import { FC } from "react";

interface I {
  onClick: () => void;
}

export const ManagerToDo: FC<I> = ({ onClick }) => {
  return (
    <div>
      <Button onClick={onClick} endIcon={<AddIcon />} variant="contained">
        Add ToDo
      </Button>
    </div>
  );
};
