import { AppBar, Typography, List, ListItem } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaymentsIcon from "@mui/icons-material/Payments";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

import styleScss from "./navList.module.scss";
import { motion } from "framer-motion";
import { NavLinkItem } from "../NavLinkItem/NavLinkItem";

interface IMenuItems {
  iconComponent: JSX.Element;
  name: string;
  id: number;
  path: string;
}

const menuItems: IMenuItems[] = [
  {
    id: 1,
    iconComponent: <HomeIcon />,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    iconComponent: <CalendarMonthIcon />,
    name: "Calendar",
    path: "calendar",
  },
  {
    id: 3,
    iconComponent: <PaymentsIcon />,
    name: "Currency",
    path: "currency",
  },
  {
    id: 4,
    iconComponent: <LibraryMusicIcon />,
    name: "Music",
    path: "music",
  },
];

export const NavList = () => {
  const { containerLink } = styleScss;

  return (
    <AppBar
      position="static"
      sx={{ width: "10%" }}
      component={motion.nav}
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      transition={{ duration: 0.2 }}
    >
      <List disablePadding className={containerLink}>
        {menuItems.map(({ iconComponent, name, id, path }) => (
          <NavLinkItem key={id} to={path}>
            <ListItem
              disablePadding
              component={motion.li}
              whileHover={{
                cursor: "pointer",
                transition: { duration: 0.3 },
              }}
            >
              {iconComponent}
              <Typography component={"h2"}>{name}</Typography>
            </ListItem>
          </NavLinkItem>
        ))}
      </List>
    </AppBar>
  );
};
