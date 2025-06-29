import DashboardLayout from "./DashboardLayout";
import Overview from "./pages/Overview";

const dashBoardRoutes = {
  path: "/dashboard",
  element: <DashboardLayout />,
  children: [
    {
      index: true,
      element: <Overview />,
    },
  ],
};

export default dashBoardRoutes;
