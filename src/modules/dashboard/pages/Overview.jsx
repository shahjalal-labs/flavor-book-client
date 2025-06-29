import { profileAnimation } from "../../../animation";
import LottieAnimation from "../../../animation/Walking";
import ProfileCard from "../../../pages/MyProfile/ProfileCard";
import DashboardStats from "../components/DashboardStats";

const Overview = () => {
  return (
    <section>
      <h1 className="text-2xl font-bold text-gray-700 mb-6">
        Dashboard Overview
      </h1>

      {/* 🔢 Stats Cards */}
      <DashboardStats />

      {/* 👤 Logged-in User Info */}
      <h2 className="text-xl font-semibold text-gray-700 my-3 text-center">
        User Details
      </h2>

      <div className="flex flex-col lg:flex-row justify-around items-center bg-purple-50 rounded-xl shadow-lg">
        <ProfileCard />
        <div className="flex-1 max-w-[400px]">
          <LottieAnimation animation={profileAnimation} />
        </div>
      </div>
    </section>
  );
};

export default Overview;
