import { Outlet } from "react-router";
import Nav from "../../components/Nav";
import DashboardSidebar from "./components/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <>
      <Nav />
      <div className="mx-auto max-w-7xl ">
        <div className="grid  grid-cols-12 gap-3 sm:p-7">
          <div className="col-span-4 lg:col-span-3">
            <DashboardSidebar />
          </div>
          <div className="col-span-8 lg:col-span-9 min-h-[70vh] flex justify-center">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
