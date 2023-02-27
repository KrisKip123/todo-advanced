import { FC, useEffect, useState } from "react";

import styleScss from "./welcome.module.scss";

import { timeToDay } from "../../../../helper/timeToDay";
import { DateTime } from "../../../../components/DateTime/DateTime";

interface IWelcome {
  nameUser: string;
}

export const Welcome: FC<IWelcome> = ({ nameUser }) => {
  const { welcomeText } = styleScss;

  const [typeTime, setTypeTime] = useState<string | null>(
    timeToDay(new Date().getHours())
  );

  useEffect(() => {
    const timerID = setTimeout(() => {
      setTypeTime(timeToDay(new Date().getHours()));
    }, 1000);
    return () => {
      clearTimeout(timerID);
    };
  });

  return (
    <>
      <DateTime type="time" />
      <DateTime type="date" />
      <span className={welcomeText}>{`Good ${typeTime}, ${nameUser}`}</span>
    </>
  );
};
