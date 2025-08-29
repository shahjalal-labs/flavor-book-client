// import { NavLink, Link } from "react-router";
// import { links } from "../constant";
// import { ChevronDown } from "lucide-react";
// import { AuthContext } from "../provider/AuthProvider";
// import { useContext } from "react";
//
// const Menu = ({ className, isExternal }) => {
//   const { user } = useContext(AuthContext);
//   return (
//     <ul className={`${className} w-full flex lg:items-center `}>
//       {links.map((link) =>
//         isExternal ? (
//           <Link key={link.label} to={link.path}>
//             {link.label}
//           </Link>
//         ) : (
//           <NavLink key={link.label} to={link.path}>
//             {link.label}
//           </NavLink>
//         ),
//       )}
//       <div className="dropdown dropdown-hover">
//         <div
//           tabIndex={0}
//           role="button"
//           className="flex items-center justify-enter gap-[1px]"
//         >
//           <span>Recipes</span>
//           <span className="mt-1">
//             <ChevronDown />
//           </span>
//         </div>
//         <ul
//           tabIndex={0}
//           className="dropdown-content menu bg-base-100 rounded-bo z-1 w-52 p-2 shadow-sm"
//         >
//           <li>
//             <NavLink to="/all-recipes">All Recipes</NavLink>
//           </li>
//           {user && (
//             <>
//               <li>
//                 <NavLink to="/add-recipe">Add Recipe</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/my-recipes">My Recipes</NavLink>
//               </li>
//             </>
//           )}
//         </ul>
//       </div>
//       <div className="dropdown dropdown-hover">
//         <div tabIndex={0} role="button" className="bt -1">
//           Chefs
//         </div>
//         <ul
//           tabIndex={0}
//           className="dropdown-content menu bg-base-100 rounded-bo z-1 w-52 p-2 shadow-sm"
//         >
//           <li>
//             <NavLink to="/chefs">Chefs</NavLink>
//           </li>
//           {user && (
//             <li>
//               <NavLink to="/chefs/register">Register as Chef</NavLink>
//             </li>
//           )}
//         </ul>
//       </div>
//       <div className="dropdown dropdown-hover">
//         <div tabIndex={0} role="button" className="bt -1">
//           Blogs
//         </div>
//         <ul
//           tabIndex={0}
//           className="dropdown-content menu bg-base-100 rounded-bo z-1 w-52 p-2 shadow-sm"
//         >
//           <li>
//             <NavLink to="/blogs">Blogs</NavLink>
//           </li>
//           <li>
//             <NavLink to="/blogs/create">Create Blog</NavLink>
//           </li>
//         </ul>
//       </div>
//       <div className="dropdown dropdown-hover">
//         <div tabIndex={0} role="button" className="bt -1">
//           Recipe Store
//         </div>
//         <ul
//           tabIndex={0}
//           className="dropdown-content menu bg-base-100 rounded-bo z-1 w-52 p-2 shadow-sm"
//         >
//           <li>
//             <NavLink to="/recipe-market">Recipe Store</NavLink>
//           </li>
//           <li>
//             <NavLink to="/recipe-market/create">Start Selling</NavLink>
//           </li>
//         </ul>
//       </div>
//       {/* dashboard route*/}
//       {user && (
//         <div>
//           <div tabIndex={0} role="button">
//             <Link to="/dashboard">Dashboard</Link>
//           </div>
//         </div>
//       )}
//     </ul>
//   );
// };
//
// export default Menu;

import { NavLink, Link } from "react-router";
import { links } from "../constant";
import { ChevronDown } from "lucide-react";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const Menu = ({ className, isExternal }) => {
  const { user } = useContext(AuthContext);
  return (
    <ul className={`${className} w-full flex lg:items-center `}>
      {links.map((link) =>
        isExternal ? (
          <Link key={link.label} to={link.path}>
            {link.label}
          </Link>
        ) : (
          <NavLink key={link.label} to={link.path}>
            {link.label}
          </NavLink>
        ),
      )}
      <div className="dropdown dropdown-hover">
        <div
          tabIndex={0}
          role="button"
          className="flex items-center justify-enter gap-[1px]"
        >
          <span>Recipes</span>
          <span className="mt-1">
            <ChevronDown />
          </span>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-gray-900 text-gray-200 rounded-lg z-10 w-52 p-2 shadow-lg"
        >
          <li>
            <NavLink to="/all-recipes">All Recipes</NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink to="/add-recipe">Add Recipe</NavLink>
              </li>
              <li>
                <NavLink to="/my-recipes">My Recipes</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="bt -1">
          Chefs
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-gray-900 text-gray-200 rounded-lg z-10 w-52 p-2 shadow-lg"
        >
          <li>
            <NavLink to="/chefs">Chefs</NavLink>
          </li>
          {user && (
            <li>
              <NavLink to="/chefs/register">Register as Chef</NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="bt -1">
          Blogs
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-gray-900 text-gray-200 rounded-lg z-10 w-52 p-2 shadow-lg"
        >
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/blogs/create">Create Blog</NavLink>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="bt -1">
          Recipe Store
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-gray-900 text-gray-200 rounded-lg z-10 w-52 p-2 shadow-lg"
        >
          <li>
            <NavLink to="/recipe-market">Recipe Store</NavLink>
          </li>
          <li>
            <NavLink to="/recipe-market/create">Start Selling</NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard route*/}
      {user && (
        <div>
          <div tabIndex={0} role="button">
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </div>
      )}
    </ul>
  );
};

export default Menu;
