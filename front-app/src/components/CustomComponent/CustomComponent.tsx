import React from "react";
import { FC, PropsWithChildren } from "react";

export const CustomComponent: FC<PropsWithChildren> = ({ children }) => {
  console.log("render CustomComponent");

  return <div>{children}</div>;
};
