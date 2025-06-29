import { Link, NavLink } from "react-router";

const DashboardSidebar = () => {
  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-green-400/30 to-blue-500/30 p- rounded-xl">
      <h2>Dashboard Sidebar</h2>
      <ul>
        <li>
          <NavLink to="/dashboard" className="btn btn-info btn-block">
            Overview
          </NavLink>
        </li>
        <li>Dashboard Sidebar</li>
        {/* 👉 Add more links here */}
      </ul>
    </div>
  );
};

export default DashboardSidebar;
