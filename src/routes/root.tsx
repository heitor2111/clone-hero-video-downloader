import { createBrowserRouter } from "react-router-dom";

import { Home, NotFound } from "../pages";

const router = createBrowserRouter([
  {
    path: "main_window",
    element: <Home />,
    errorElement: <NotFound />,
  },
]);

export default router;
