import { NavLink, Navigate, Route, Routes } from "react-router-dom";

import { useCurrentPath } from "@hooks/index";
import routes from "@routes/root";

const Root = () => {
  const currentPath = useCurrentPath();

  return (
    <div className="h-screen flex">
      <nav className="w-1/5 bg-gray-200 dark:bg-gray-500 border-r border-gray-400 p-5">
        <ul>
          {routes.map(({ id, label, path }) => (
            <li key={id} className="mb-2">
              <NavLink
                className={`block p-2 rounded-md hover:bg-gray-400 transition duration-300 ${
                  currentPath && currentPath.path === path ? "bg-gray-400" : ""
                }`}
                to={path}
                children={label}
              />
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex-1 bg-gray-100 p-5">
        <Routes>
          {routes.map(({ path, element, id }) => (
            <Route key={id} path={path} element={element} />
          ))}

          <Route path="*" element={<Navigate to="main_window/home" />} />
        </Routes>
      </div>
    </div>
  );
};

export default Root;
