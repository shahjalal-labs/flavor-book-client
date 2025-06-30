import { Outlet } from "react-router";
import Nav from "../components/Nav";

const AuthLayout = () => {
  return (
    <div className="max-container">
      <Nav />
      <div className="sm:p-7">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
