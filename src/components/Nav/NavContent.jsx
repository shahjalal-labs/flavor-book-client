import { Link, NavLink } from "react-router";
import Button from "../Button";
import { AlignJustify, Moon, Sun } from "lucide-react";
import Menu from "../Menu";

const NavContent = ({ loading, user, logout, setOpen, open }) => {
  return (
    <div>
      <div className="flex items-center gap-1 flex-row-reverse">
        <div className="relative">
          <div className="max-lg:hidden">
            {loading ? (
              <span className="text-black">Loading...</span>
            ) : user ? (
              <div className="flex gap-2 items-center">
                {user.photoURL ? (
                  <>
                    <div className="dropdown dropdown-hover">
                      <div tabIndex={0} role="button" className="bt -1">
                        <img
                          src={user.photoURL}
                          className="h-7 w-7 rounded-full border p-[2px]"
                        />
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-bo z-1 w-52 p-2 shadow-sm "
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
                  </>
                ) : (
                  <Link to="/my-profile">{user.displayName}</Link>
                )}
                <div onClick={logout}>
                  <Button label={"Logout"} className={"text-white"} />
                </div>
              </div>
            ) : (
              <Link to="/auth/login">
                <Button label={"Login"} className={"text-white"} />
              </Link>
            )}
          </div>
          <div
            onClick={() => setOpen(!open)}
            className={`lg:hidden text-gray-700`}
          >
            <button>
              {open ? (
                <span className="text-2xl font-semibold p-1 ">X</span>
              ) : (
                <span>
                  <AlignJustify />
                </span>
              )}
            </button>
          </div>
          <div
            className={` w-[250px] rounded-lg absolute -left-[10px] lg:hidden p-2 ${open ? "" : "hidden"} bg-gradient-to-tr from-cyan-50  to-purple-200`}
          >
            {/* mobile device menu */}
            <Menu className="px-4  flex flex-col gap-1 text-gray-600 font-semibold text-lg" />
            {user ? (
              <button
                onClick={logout}
                className="pt-[-4px] pl-4 text-gray-600 font-semibold text-lg"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/auth/login"
                className="pt-[-4px] pl-4 text-gray-600 font-semibold text-lg"
              >
                Login
              </Link>
            )}
          </div>
        </div>
        {/*         <button
          onClick={() => {
            themeSwither();
            setThemeLight(!themeLight);
          }}
          className="border px-1 py-1 rounded-full bg-gray-500 text-white scale-85"
        >
          {!themeLight ? <Sun /> : <Moon />}
        </button> */}
      </div>
    </div>
  );
};

export default NavContent;
