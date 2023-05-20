import { matchRoutes, useLocation } from "react-router-dom";
import routes from "@routes/root";

const useCurrentPath = () => {
  const location = useLocation();
  const matches = matchRoutes(routes, location.pathname || "/");

  if (matches && matches.length) {
    return matches[0].route;
  }

  return null;
};

export default useCurrentPath;
