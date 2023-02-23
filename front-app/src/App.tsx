import { useState, useCallback } from "react";

import { NavBar, NavList, Layout, LayoutMain, Footer } from "./components";

import { AnimatePresence } from "framer-motion";

import { Outlet } from "react-router-dom";
import { LayoutPage } from "./components/Layout/LayoutPage";

const App = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(true);

  const handleClick = useCallback(() => setIsOpenSideBar((prev) => !prev), []);

  return (
    <Layout>
      <NavBar handleVisible={handleClick} />
      <LayoutMain>
        <AnimatePresence>{isOpenSideBar && <NavList />}</AnimatePresence>
        <AnimatePresence>
          <Outlet />
        </AnimatePresence>
      </LayoutMain>
      <Footer />
    </Layout>
  );
};

export default App;
