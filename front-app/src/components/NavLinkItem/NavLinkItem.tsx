import { NavLink } from "react-router-dom";
import { FC, PropsWithChildren } from "react";

import styleScss from "./navLinkItem.module.scss";

export const NavLinkItem: FC<PropsWithChildren<{ to: string }>> = (props) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? styleScss.customLinkActive + " " + styleScss.customLink
          : styleScss.customLink
      }
      {...props}
    />
  );
};
