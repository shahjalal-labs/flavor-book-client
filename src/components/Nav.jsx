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
    <header className="px-4 max-container ">
      <nav
        className="flex max-lg:flex-row-reverse items-center justify-between p-3 rounded-2xl 
        bg-gray-900/70 backdrop-blur-xl transition-all duration-500"
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
