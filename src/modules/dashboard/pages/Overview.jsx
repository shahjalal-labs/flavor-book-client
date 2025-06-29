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
      <h2 className="text-xl font-semibold text-gray-700 mb-4">User Details</h2>

      <ProfileCard />
    </section>
  );
};

export default Overview;
