import { FC } from "react";

import styleScss from "./cellDate.module.scss";

interface ICellDate {
  name: string;
}

export const CellDate: FC<ICellDate> = ({ name }) => {
  const { cellContainer } = styleScss;

  return <div className={cellContainer}>{name}</div>;
};
