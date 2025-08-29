// import { Link, NavLink } from "react-router";
// import Button from "../Button";
// import { AlignJustify, Moon, Sun } from "lucide-react";
// import Menu from "../Menu";
//
// const NavContent = ({ loading, user, logout, setOpen, open }) => {
//   return (
//     <div>
//       <div className="flex items-center gap-1 flex-row-reverse">
//         <div className="relative">
//           <div className="max-lg:hidden">
//             {loading ? (
//               <span className="text-black">Loading...</span>
//             ) : user ? (
//               <div className="flex gap-2 items-center">
//                 {user.photoURL ? (
//                   <>
//                     <div className="dropdown dropdown-hover">
//                       <div tabIndex={0} role="button" className="bt -1">
//                         <img
//                           src={user.photoURL}
//                           className="h-7 w-7 rounded-full border p-[2px]"
//                         />
//                       </div>
//                       <ul
//                         tabIndex={0}
//                         className="dropdown-content menu bg-base-100 rounded-bo z-1 w-52 p-2 shadow-sm "
//                       >
//                         <li>
//                           <NavLink to="/my-profile">Profile</NavLink>
//                         </li>
//                         <li>
//                           <NavLink to="/my-orders">My Orders</NavLink>
//                         </li>
//                         <li>
//                           <NavLink to="/my-recipes">My Recipes</NavLink>
//                         </li>
//                       </ul>
//                     </div>
//                   </>
//                 ) : (
//                   <Link to="/my-profile">{user.displayName}</Link>
//                 )}
//                 <div onClick={logout}>
//                   <Button label={"Logout"} className={"text-white"} />
//                 </div>
//               </div>
//             ) : (
//               <Link to="/auth/login">
//                 <Button label={"Login"} className={"text-white"} />
//               </Link>
//             )}
//           </div>
//           <div
//             onClick={() => setOpen(!open)}
//             className={`lg:hidden text-gray-700`}
//           >
//             <button>
//               {open ? (
//                 <span className="text-2xl font-semibold p-1 ">X</span>
//               ) : (
//                 <span>
//                   <AlignJustify />
//                 </span>
//               )}
//             </button>
//           </div>
//           <div
//             className={` w-[250px] rounded-lg absolute -left-[10px] lg:hidden p-2 ${open ? "" : "hidden"} bg-gradient-to-tr from-cyan-50  to-purple-200`}
//           >
//             {/* mobile device menu */}
//             <Menu className="px-4  flex flex-col gap-1 text-gray-600 font-semibold text-lg" />
//             {user ? (
//               <button
//                 onClick={logout}
//                 className="pt-[-4px] pl-4 text-gray-600 font-semibold text-lg"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link
//                 to="/auth/login"
//                 className="pt-[-4px] pl-4 text-gray-600 font-semibold text-lg"
//               >
//                 Login
//               </Link>
//             )}
//           </div>
//         </div>
//         {/*         <button
//           onClick={() => {
//             themeSwither();
//             setThemeLight(!themeLight);
//           }}
//           className="border px-1 py-1 rounded-full bg-gray-500 text-white scale-85"
//         >
//           {!themeLight ? <Sun /> : <Moon />}
//         </button> */}
//       </div>
//     </div>
//   );
// };
//
// export default NavContent;

import { Link, NavLink } from "react-router";
import Button from "../Button";
import { AlignJustify, BookOpen, Package, User } from "lucide-react";
import Menu from "../Menu";

const NavContent = ({ loading, user, logout, setOpen, open }) => {
  return (
    <div>
      <div className="flex items-center gap-1 flex-row-reverse">
        <div className="relative">
          <div className="max-lg:hidden">
            {loading ? (
              <span className="text-gray-300">Loading...</span>
            ) : user ? (
              <div className="flex gap-2 items-center">
                {user.photoURL ? (
                  <div className="dropdown dropdown-left dropdown-hover ">
                    <div
                      tabIndex={0}
                      role="button"
                      className="bt -1 rounded-full border border-gray-600 p-[2px] hover:scale-105 transition-transform"
                    >
                      <img
                        src={user.photoURL}
                        className="h-7 w-7 rounded-full border p-[2px] border-gray-600"
                      />
                    </div>

                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-gray-900 text-gray-200 border border-purple-950 rounded-lg z-50 w-52 p-2 shadow-xl shadow-black/50"
                    >
                      <li>
                        <NavLink
                          to="/my-profile"
                          className="flex items-center gap-2 hover:bg-gray-800 rounded px-2 py-1 transition"
                        >
                          <User className="w-4 h-4 text-indigo-400" />
                          Profile
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/my-orders"
                          className="flex items-center gap-2 hover:bg-gray-800 rounded px-2 py-1 transition"
                        >
                          <Package className="w-4 h-4 text-indigo-400" />
                          My Orders
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/my-recipes"
                          className="flex items-center gap-2 hover:bg-gray-800 rounded px-2 py-1 transition"
                        >
                          <BookOpen className="w-4 h-4 text-indigo-400" />
                          My Recipes
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link
                    to="/my-profile"
                    className="text-gray-200 hover:text-indigo-400 transition"
                  >
                    {user.displayName}
                  </Link>
                )}
                <div onClick={logout}>
                  <Button
                    label={"Logout"}
                    className="text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg"
                  />
                </div>
              </div>
            ) : (
              <Link to="/auth/login">
                <Button
                  label={"Login"}
                  className="text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg"
                />
              </Link>
            )}
          </div>
          <div
            onClick={() => setOpen(!open)}
            className={`lg:hidden text-gray-200`}
          >
            <button className="p-1 hover:text-indigo-400 transition">
              {open ? (
                <span className="text-2xl font-semibold p-1">X</span>
              ) : (
                <AlignJustify />
              )}
            </button>
          </div>
          <div
            className={`w-[250px] rounded-lg absolute -left-[10px] lg:hidden p-2 ${
              open ? "" : "hidden"
            } bg-gradient-to-tr from-gray-900 to-gray-800 shadow-2xl`}
          >
            {/* mobile device menu */}
            <Menu className="px-4 flex flex-col gap-1 text-gray-200 font-semibold text-lg" />
            {user ? (
              <button
                onClick={logout}
                className="pt-[-4px] pl-4 text-gray-200 font-semibold text-lg hover:text-indigo-400 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/auth/login"
                className="pt-[-4px] pl-4 text-gray-200 font-semibold text-lg hover:text-indigo-400 transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavContent;
