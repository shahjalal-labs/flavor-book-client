// import { use } from "react";
import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../../provider/AuthProvider";

const BlogSidebar = () => {
  // const { user } = use(AuthContext);
  return (
    <aside className="w-64 min-h-[80vh] bg-gradient-to-r from-gray-200 to-gray-100  bg-gray-300  p-4 rounded-md">
      <h2 className="text-xl font-bold mb-6 text-gray-500">Navigation</h2>
      <nav className="flex flex-col space-y-2">
        <Link to="/" className="text-gray-400 font-semibold">
          Home
        </Link>
        <div className="dropdown dropdown-hover text-gray-400 font-semibold">
          <div tabIndex={0} role="button" className="bt -1">
            Chefs
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-bo z-1 w-52 p-2 shadow-sm text-gray-600"
          >
            <li>
              <NavLink to="/chefs">Chefs</NavLink>
            </li>
            <li>
              <NavLink to="/chefs/register">Register as Chef</NavLink>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover text-gray-400 font-semibold">
          <div tabIndex={0} role="button" className="bt -1">
            Blogs
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-bo z-1 w-52 p-2 shadow-sm text-gray-600"
          >
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/blogs/create">Write a Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover text-gray-400 font-semibold">
          <div tabIndex={0} role="button" className="bt -1">
            Recipe Store
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-bo z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <NavLink to="/recipe-market">Recipe Store</NavLink>
            </li>
            <li>
              <NavLink to="/recipe-market/create">Start Selling</NavLink>
            </li>
          </ul>
        </div>
        {/* profile orders page */}
        <div className="dropdown dropdown-hover text-gray-400 font-semibold text-lg">
          <div tabIndex={0} role="button" className="bt -1">
            Account
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-bo z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <NavLink to="/my-profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/my-orders">My Orders</NavLink>
            </li>
            <li>
              <NavLink to="/my-recipes">My Recipes</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default BlogSidebar;
