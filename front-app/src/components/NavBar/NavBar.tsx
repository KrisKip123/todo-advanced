import { FC } from "react";

import {
  Toolbar,
  AppBar,
  Box,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import PersonIcon from "@mui/icons-material/Person";
import { motion } from "framer-motion";

interface INavBar {
  handleVisible: () => void;
}

export const NavBar: FC<INavBar> = ({ handleVisible }) => {
  return (
    <AppBar
      position="static"
      component={motion.header}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.2, ease: "linear" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ gap: "5px" }}>
          <IconButton color="inherit" onClick={handleVisible}>
            <MenuIcon />
          </IconButton>
          <IconButton disableRipple color="inherit">
            <SortByAlphaIcon />
            <Typography>My App</Typography>
          </IconButton>
        </Box>
        <Button color="inherit" sx={{ gap: "5px" }}>
          <Typography component={"span"}>Sign In</Typography>
          <PersonIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
};
