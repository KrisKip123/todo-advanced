import { useEffect } from "react";
import useForceUpdate from "./useForceUpdate";
interface IUseDateTime {
  locales: "en-US" | "ru-Ru";
}

export const useDateTime = ({ locales }: IUseDateTime) => {
  const forceUpdate = useForceUpdate();

  const dateNow = new Date();

  const time = dateNow.toLocaleTimeString(locales);

  const date = dateNow.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    weekday: "long",
    timeZone: "UTC",
  });

  useEffect(() => {
    const timerId = setTimeout(() => {
      forceUpdate();
    });
    return () => {
      clearTimeout(timerId);
    };
  });

  return { time, date };
};
