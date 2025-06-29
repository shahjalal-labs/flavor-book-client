import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { statsData } from "../DashboardConstant";
import DashboardStatWithProfileImage from "./DashboardStatWithProfileImage";

const DashboardStats = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="stats shadow   w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3">
        {statsData.map((stat, index) => (
          <div className="stat " key={index}>
            <div className={`stat-figure text-${stat.color}`}>{stat.icon}</div>
            <div className="stat-title">{stat.title}</div>
            <div className={`stat-value text-${stat.color}`}>{stat.value}</div>
            <div className="stat-desc">{stat.desc}</div>
          </div>
        ))}
        <DashboardStatWithProfileImage />
      </div>
    </div>
  );
};

export default DashboardStats;
