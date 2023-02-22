import { createBrowserRouter } from "react-router-dom";

import { PlugPage } from "../pages/PlugPage/PlugPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PlugPage tittle="Home" />,
  },
  {
    path: "/calendar",
    element: <PlugPage tittle="Calendar" />,
  },
  {
    path: "/currency",
    element: <PlugPage tittle="/Currency" />,
  },
  {
    path: "/music",
    element: <PlugPage tittle="Music" />,
  },
]);

export { router };
