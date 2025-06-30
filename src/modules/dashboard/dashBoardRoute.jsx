import DashboardLayout from "./DashboardLayout";
import DashboardAllRecipes from "./pages/DashboardAllRecipes";
import Overview from "./pages/Overview";

const dashBoardRoutes = {
  path: "/dashboard",
  element: <DashboardLayout />,
  children: [
    {
      index: true,
      element: <Overview />,
    },
    {
      path: "all-recipes",
      element: <DashboardAllRecipes />,
    },
  ],
};

export default dashBoardRoutes;
