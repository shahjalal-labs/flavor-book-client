// import { Outlet } from "react-router-dom";
// import Nav from "../components/Nav";
// import Footerr from "../pages/Footerr";
//
// const Layout = () => {
//   return (
//     <>
//       <Nav />
//       <main className="min-h-[60vh] max-container">
//         <Outlet />
//       </main>
//       <Footerr />
//     </>
//   );
// };
//
// export default Layout;
//
//

import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footerr from "../pages/Footerr";

const Layout = () => {
  return (
    <>
      {/* Navbar with night theme */}
      <header className="shadow-lg shadow-purple-900/40 bg-gray-950/70 backdrop-blur-md border-b border-purple-700/30 sticky top-0 z-50">
        <Nav />
      </header>

      {/* Main content with night theme */}
      <main className="min-h-[60vh] max-container px-4 sm:px-6 lg:px-8 py-6 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-100 transition-all duration-500">
        <Outlet />
      </main>

      {/* Footer with night theme */}
      <footer className="bg-gray-950/80 border-t border-purple-700/30 shadow-inner shadow-fuchsia-900/30">
        <Footerr />
      </footer>
    </>
  );
};

export default Layout;
