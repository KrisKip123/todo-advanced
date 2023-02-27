import { FC } from "react";

import { Box, IconButton, Typography } from "@mui/material";

import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import { MOUTH } from "../constants";

interface IControls {
  year: number;
  mouth: number;
  nextMouth: () => void;
  prevMoth: () => void;
  nextYear: () => void;
  prevYear: () => void;
}

export const Controls: FC<IControls> = ({
  mouth,
  nextMouth,
  nextYear,
  prevMoth,
  prevYear,
  year,
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <IconButton onClick={prevMoth}>
        <KeyboardArrowLeftIcon />
      </IconButton>
      <IconButton onClick={prevYear}>
        <KeyboardDoubleArrowLeftIcon />
      </IconButton>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          width: "10vw",
          justifyContent: "center",
        }}
      >
        {`${MOUTH[mouth]}, ${year}`}
      </Typography>
      <IconButton onClick={nextYear}>
        <KeyboardDoubleArrowRightIcon />
      </IconButton>
      <IconButton onClick={nextMouth}>
        <KeyboardArrowRightIcon />
      </IconButton>
    </Box>
  );
};
