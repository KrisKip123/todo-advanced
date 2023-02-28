import React, { FC } from "react";
import { IconButton, Typography } from "@mui/material";

import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import styleScss from "./controls.module.scss";

interface IControls {
  title: string;
  clickLeftIcon: () => void;
  clickLeftDoubleIcon: () => void;
  clickRightIcon: () => void;
  clickRightDoubleIcon: () => void;
}

export const Controls: FC<IControls> = ({
  title,
  clickLeftDoubleIcon,
  clickLeftIcon,
  clickRightDoubleIcon,
  clickRightIcon,
}) => {
  const { wrapper_controls } = styleScss;

  return (
    <div className={wrapper_controls}>
      <IconButton onClick={clickLeftIcon}>
        <KeyboardArrowLeftIcon />
      </IconButton>
      <IconButton onClick={clickLeftDoubleIcon}>
        <KeyboardDoubleArrowLeftIcon />
      </IconButton>
      <Typography>{title}</Typography>
      <IconButton onClick={clickRightDoubleIcon}>
        <KeyboardDoubleArrowRightIcon />
      </IconButton>
      <IconButton onClick={clickRightIcon}>
        <KeyboardArrowRightIcon />
      </IconButton>
    </div>
  );
};
