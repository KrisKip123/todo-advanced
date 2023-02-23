import { useEffect } from "react";
import useForceUpdate from "./useForceUpdate";
interface IUseDateTime {
  locales: "en-US";
}

export const useDateTime = ({ locales }: IUseDateTime) => {
  const forceUpdate = useForceUpdate();

  const dateNow = new Date();
  const time = dateNow.toLocaleTimeString(locales);
  const date = dateNow.toLocaleDateString();

  useEffect(() => {
    const timerId = setTimeout(() => {
      forceUpdate();
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  });

  return time;
};
