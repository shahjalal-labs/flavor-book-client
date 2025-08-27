import { Link, NavLink } from "react-router";
import { useMediaQuery } from "react-responsive";

const DashboardSidebar = () => {
  const isBelow400 = useMediaQuery({ maxWidth: 400 });

  return (
    <div
      className={`h-full bg-gradient-to-br from-gray-900 via-gray-950 to-gray-800 p-4 rounded-xl shadow-lg shadow-indigo-500/30 ${
        isBelow400 ? "scale-90 -mt-[100px]" : ""
      }`}
    >
      <ul className="space-y-2 pt-3 sticky top-[50px]">
        <li>
          <Link
            to="/dashboard"
            className="btn w-full bg-indigo-700 hover:bg-indigo-600 text-white border border-indigo-500 transition shadow-md"
          >
            Overview
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/all-recipes"
            className="btn w-full bg-indigo-700 hover:bg-indigo-600 text-white border border-indigo-500 transition shadow-md"
          >
            All Recipes
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/my-recipes"
            className="btn w-full bg-indigo-700 hover:bg-indigo-600 text-white border border-indigo-500 transition shadow-md"
          >
            My Recipes
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/recipe-market"
            className="btn w-full bg-indigo-700 hover:bg-indigo-600 text-white border border-indigo-500 transition shadow-md"
          >
            Recipe Market
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/chefs"
            className="btn w-full bg-indigo-700 hover:bg-indigo-600 text-white border border-indigo-500 transition shadow-md"
          >
            Chefs
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
