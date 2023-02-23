import { useState } from "react";
import { useDateTime } from "../../hooks/useDateTime";

export const Clock = () => {
  const date = useDateTime({ locales: "en-US" });

  return <div>{date}</div>;
};
