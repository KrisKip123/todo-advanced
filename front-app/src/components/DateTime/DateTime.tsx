import { useDateTime } from "../../hooks/useDateTime";

import styleScss from "./clock.module.scss";
import { FC } from "react";

interface IDateTime {
  type: "time" | "date";
}

export const DateTime: FC<IDateTime> = ({ type }) => {
  const { date, time } = useDateTime({ locales: "ru-Ru" });

  const { timeText, dateText } = styleScss;

  return type === "time" ? (
    <span className={timeText}>{time}</span>
  ) : (
    <span className={dateText}>{date}</span>
  );
};
