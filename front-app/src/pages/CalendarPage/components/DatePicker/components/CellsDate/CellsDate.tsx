import { FC } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

import styleScss from "./cellGrid.module.scss";

interface ICellGrid {
  day: number;
  year: number;
  month: number;
}

const { container_cell, current_day, weekend } = styleScss;

const checkDate = ({ day, year, month }: ICellGrid): boolean => {
  const currentDate = new Date();
  if (currentDate.getFullYear() !== year) return false;
  if (currentDate.getDate() !== day) return false;
  if (currentDate.getMonth() !== month) return false;

  return true;
};

const checkWeekend = (date: Date): boolean => {
  if (date.getDay() === 6 || date.getDay() === 0) return true;
  return false;
};

export const CellDate: FC<ICellGrid> = ({ day, year, month }) => {
  const style = classNames(container_cell, {
    [current_day]: checkDate({ day, year, month }),
    [weekend]: checkWeekend(new Date(year, month, day)),
  });

  return (
    <motion.div className={style}>
      <span>{day}</span>
    </motion.div>
  );
};
