// import { AlignJustify } from "lucide-react";
// import { useContext, useState } from "react";
// import { AuthContext } from "../provider/AuthProvider";
// import { themeSwither } from "../hooks/ThemeSwitcher";
// import Brand from "./Brand";
// import Menu from "./Menu";
// import NavContent from "./Nav/NavContent";
//
// const Nav = () => {
//   const [open, setOpen] = useState(false);
//
//   const [themeLight, setThemeLight] = useState(true);
//   const { user, logout, loading } = useContext(AuthContext);
//
//   return (
//     <header className=" px-4  max-container sticky z-10 top-0">
//       <nav className=" flex max-lg:flex-row-reverse items-center justify-between  p-2 rounded-xl sticky z-[1000] bg-gradient-to-br from-cyan-300/50 via-purple-500/10 to-accent/20 backdrop-blur">
//         <div>
//           <Brand />
//         </div>
//
//         {/* desktop device menu */}
//         <div>
//           <Menu
//             className={`max-lg:hidden flex gap-5 text-gray-600 font-semibold text-lg`}
//           />
//         </div>
//         <NavContent
//           loading={loading}
//           user={user}
//           logout={logout}
//           setOpen={setOpen}
//           open={open}
//           themeLight={themeLight}
//           setThemeLight={setThemeLight}
//           themeSwither={themeSwither}
//         />
//       </nav>
//     </header>
//   );
// };
// <AlignJustify />;
//
// export default Nav;

import { AlignJustify } from "lucide-react";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { themeSwither } from "../hooks/ThemeSwitcher";
import Brand from "./Brand";
import Menu from "./Menu";
import NavContent from "./Nav/NavContent";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const [themeLight, setThemeLight] = useState(true);
  const { user, logout, loading } = useContext(AuthContext);

  return (
    <header className="px-4 max-container sticky z-20 top-0">
      <nav
        className="flex max-lg:flex-row-reverse items-center justify-between p-3 rounded-2xl 
        sticky z-[1000] 
        bg-gray-900/70 backdrop-blur-xl border border-purple-700/30 
        shadow-lg shadow-purple-900/40 
        transition-all duration-500"
      >
        {/* Brand / Logo */}
        <div className="hover:scale-105 transition-transform duration-300">
          <Brand />
        </div>

        {/* Desktop Menu */}
        <div>
          <Menu
            className={`max-lg:hidden flex gap-6 text-gray-300 font-semibold text-lg`}
          />
        </div>

        {/* Nav Content (User, Theme, etc.) */}
        <NavContent
          loading={loading}
          user={user}
          logout={logout}
          setOpen={setOpen}
          open={open}
          themeLight={themeLight}
          setThemeLight={setThemeLight}
          themeSwither={themeSwither}
        />
      </nav>
    </header>
  );
};
<AlignJustify />;

export default Nav;
