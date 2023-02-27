import { createBrowserRouter } from "react-router-dom";

import { PlugPage } from "../pages/PlugPage/PlugPage";
import { HomePage } from "../pages/HomePage/HomePage";
import App from "../App";
import { CalendarPage } from "../pages/CalendarPage/CalendarPage";

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
        element: <CalendarPage />,
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
