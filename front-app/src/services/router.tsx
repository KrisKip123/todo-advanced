import { createBrowserRouter } from "react-router-dom";

import { PlugPage } from "../pages/PlugPage/PlugPage";
import { HomePage } from "../pages/HomePage/HomePage";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        path: "/calendar",
        element: <PlugPage tittle="Calendar" />,
      },
      {
        path: "/currency",
        element: <PlugPage tittle="Currency" />,
      },
      {
        path: "/music",
        element: <PlugPage tittle="Music" />,
      },
    ],
  },
]);

export { router };
