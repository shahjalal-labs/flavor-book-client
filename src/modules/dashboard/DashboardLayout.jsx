import { Outlet } from "react-router";
import Nav from "../../components/Nav";

const DashboardLayout = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Nav />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
