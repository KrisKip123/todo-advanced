import { FC } from "react";

import styleScss from "./cellDate.module.scss";
import { motion } from "framer-motion";

interface ICellDayWeek {
  day: number;
  year: number;
  month: number;
}

const checkDate = (day: number, year: number, month: number) => {
  const currentDate = new Date();

  if (
    currentDate.getDate() === day &&
    currentDate.getFullYear() === year &&
    currentDate.getMonth() === month
  ) {
    return true;
  }
  return false;
};

export const CellDateDay: FC<ICellDayWeek> = ({ day, year, month }) => {
  const { cellContainer } = styleScss;

  return (
    <motion.div
      whileHover={{
        scale: 1.2,
      }}
      className={cellContainer}
    >
      {day}
    </motion.div>
  );
};
