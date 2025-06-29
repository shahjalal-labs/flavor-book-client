import { Outlet } from "react-router";
import Nav from "../../components/Nav";
import BlogSidebar from "../../modules/blogs/BlogSidebar";
import DashboardSidebar from "./components/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="mx-auto max--7xl border">
      <Nav />
      <div className="grid justify-items-center grid-cols-12">
        <div className="col-span-4 border border-green-500">
          <DashboardSidebar />
        </div>
        <div className="col-span-8 border border-red-500">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
