import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";

import { Root } from "./pages";

createRoot(document.getElementById("root")).render(
  <MemoryRouter>
    <Root />
  </MemoryRouter>
);
