import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footerr from "../pages/Footerr";

const Layout = () => {
  return (
    <>
      <div
        className="bg-gray-900/70 backdrop-blur-xl border border-purple-700/30 
        hadow-lg shadow-purple-900/40 sticky z-20 top-0"
      >
        <Nav />
      </div>
      <main className="min-h-[60vh] max-container">
        <Outlet />
      </main>
      <Footerr />
    </>
  );
};

export default Layout;
