import DashboardLayout from "./DashboardLayout";
import DashboardAllRecipes from "./pages/DashboardAllRecipes";
import DashboardRecipeMarket from "./pages/DashboardRecipeMarket";
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
    {
      path: "recipe-market",
      element: <DashboardRecipeMarket />,
    },
  ],
};

export default dashBoardRoutes;
