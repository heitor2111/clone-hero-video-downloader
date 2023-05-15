import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { root as routerRoot } from "./routes";

const app = document.getElementById("app");
const root = createRoot(app);

root.render(<RouterProvider router={routerRoot} />);
