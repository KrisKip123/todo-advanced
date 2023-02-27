import { useMemo, useState } from "react";

import { Box } from "@mui/material";

import styleScss from "./datePicker.module.scss";

import { getDaysCalendar } from "./utils/date";

import { WEEKDAY } from "./constants";

import { motion } from "framer-motion";

import { CellDate } from "./CellDate/CellDate";

import { CellDateDay } from "./CellDate/CellDateDay";
import { Controls } from "./Controls/Controls";

const {} = styleScss;

export const DatePicker = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [mouth, setMouth] = useState<number>(new Date().getMonth());

  const cellsWeeks = useMemo(
    () => getDaysCalendar({ year, mouth }),
    [mouth, year]
  );

  const nextMouth = () => {
    if (mouth === 11) {
      setMouth(() => 0);
    } else {
      setMouth((prev) => prev + 1);
    }
  };

  const prevMouth = () => {
    if (mouth === 0) {
      setMouth(() => 11);
    } else {
      setMouth((prev) => prev - 1);
    }
  };

  const nextYear = () => {
    setYear((prev) => prev + 1);
  };

  const prevYear = () => {
    setYear((prev) => prev - 1);
  };
  return (
    <Box>
      <Controls
        mouth={mouth}
        year={year}
        nextMouth={nextMouth}
        nextYear={nextYear}
        prevMoth={prevMouth}
        prevYear={prevYear}
      />
      <Box sx={{ border: "1px solid rgb(190,190,190)", borderRadius: "10px" }}>
        <Box sx={{ display: "flex" }}>
          {WEEKDAY.map((day, index) => (
            <CellDate key={index} name={day} />
          ))}
        </Box>
        {cellsWeeks.map((week, index) => {
          return (
            <Box key={index} sx={{ display: "flex" }}>
              {week.map((day, index) => {
                return <CellDateDay {...day} key={index} />;
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
