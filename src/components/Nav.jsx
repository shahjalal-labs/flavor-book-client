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
    <header className=" px-4  max-container sticky z-10 top-0">
      <nav className=" flex max-lg:flex-row-reverse items-center justify-between  p-2 rounded-xl sticky z-[1000] bg-gradient-to-br from-cyan-50 to-gray-200">
        <div>
          <Brand />
        </div>

        {/* desktop device menu */}
        <div>
          <Menu
            className={`max-lg:hidden flex gap-5 text-gray-600 font-semibold text-lg`}
          />
        </div>
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
