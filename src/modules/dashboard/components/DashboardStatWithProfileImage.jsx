import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const DashboardStatWithProfileImage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="stat ">
      <div className="stat-figure text-secondary">
        <div className="avatar avatar-online">
          <div className="w-16 rounded-full">
            <img src={user?.photoURL} />
          </div>
        </div>
      </div>
      <div className="stat-value">16%</div>
      <div className="stat-title">Impct created</div>
      <div className="stat-desc text-secondary">84 % impact remaining</div>
    </div>
  );
};

export default DashboardStatWithProfileImage;
