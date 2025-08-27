/* import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footerr from "../pages/Footerr";

const Layout = () => {
  return (
    <>
      <Nav />
      <main className="min-h-[60vh] max-container">
        <Outlet />
      </main>
      <Footerr />
    </>
  );
};

export default Layout; */

import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footerr from "../pages/Footerr";

const Layout = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="shadow-lg shadow-purple-900/40 bg-gray-950/70 backdrop-blur-md border-b border-purple-700/30 sticky top-0 z-50">
        <Nav />
      </header>

      {/* Main Content */}
      <main className="flex-grow min-h-[60vh] max-container px-4 sm:px-6 lg:px-8 py-6 transition-all duration-500">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-950/80 border-t border-purple-700/30 shadow-inner shadow-fuchsia-900/30">
        <Footerr />
      </footer>
    </div>
  );
};

export default Layout;
