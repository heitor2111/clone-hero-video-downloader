interface Routes {
  id: string;
  label: string;
  path: string;
  element: React.ReactElement;
}

const routes: Routes[] = [
  {
    id: "home",
    label: "Home",
    path: "/main_window/home",
    element: <div>Home!</div>,
  },
  {
    id: "settings",
    label: "Settings",
    path: "/main_window/settings",
    element: <div>Settings!</div>,
  },
];

export default routes;
