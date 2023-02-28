import { useState, useMemo } from "react";

import { Controls, CellTitle, CellDate } from "./components";
import styleScss from "./datePicker.module.scss";

import { MOUTH } from "./constants";
import { getDaysCalendar } from "./utils/date";
import { Paper } from "@mui/material";

export const DatePicker = () => {
  const [mouth, setMouth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const daysInMonth = useMemo(() => {
    return getDaysCalendar({ mouth, year });
  }, [mouth, year]);

  const handleControls = useMemo(() => {
    return {
      handleNextMonth: () => {
        setMouth((prevMouth) => (prevMouth === 11 ? 0 : prevMouth + 1));
      },
      handlePrevMonth: () => {
        setMouth((prevMouth) => (prevMouth === 0 ? 11 : prevMouth - 1));
      },
      handleNextYear: () => {
        setYear((prevYear) => prevYear + 1);
      },
      handlePrevYear: () => {
        setYear((prevYear) => prevYear - 1);
      },
    };
  }, []);

  const { wrapper, wrapper_days } = styleScss;

  return (
    <Paper elevation={11}>
      <div className={wrapper}>
        <Controls
          title={`${MOUTH[mouth]}, ${year}`}
          clickLeftIcon={handleControls.handlePrevMonth}
          clickRightIcon={handleControls.handleNextMonth}
          clickLeftDoubleIcon={handleControls.handlePrevYear}
          clickRightDoubleIcon={handleControls.handleNextYear}
        />
        <CellTitle />
        <div className={wrapper_days}>
          {daysInMonth.map(({ id, ...date }) => (
            <CellDate key={id} {...date} />
          ))}
        </div>
      </div>
    </Paper>
  );
};
