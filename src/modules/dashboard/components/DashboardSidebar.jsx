import { Link, NavLink } from "react-router";
import { useMediaQuery } from "react-responsive";

const DashboardSidebar = () => {
  const isBelow400 = useMediaQuery({ maxWidth: 400 });
  return (
    <div
      className={`h-full bg-gradient-to-br from-green-400/30 to-blue-500/30 p- rounded-xl ${isBelow400 ? "scale-90 -mt-[100px]" : ""}`}
    >
      {/* <h2>Dashboard Sidebar</h2> */}
      <ul className="space-y-2 pt-3 sticky z-10 top-[50px]">
        <li>
          <NavLink to="/dashboard" className="btn btn-info btn-block">
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/all-recipes"
            className="btn btn-info btn-block"
          >
            All Recipes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/my-recipes"
            className="btn btn-info btn-block"
          >
            My Recipes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/recipe-market"
            className="btn btn-info btn-block"
          >
            Recipe Market
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/chefs" className="btn btn-info btn-block">
            Chefs
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
