import Overview from "./pages/Overview";

const dashBoardRoutes = {
  path: "/dashboard",
  children: [
    {
      index: true,
      element: <Overview />,
    },
  ],
};

export default dashBoardRoutes;
