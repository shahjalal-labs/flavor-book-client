import ProfileCard from "../../../pages/MyProfile/ProfileCard";

const Overview = () => {
  return (
    <section>
      <h1 className="text-2xl font-bold text-gray-700 mb-6">
        Dashboard Overview
      </h1>

      {/* 🔢 Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-500">
          <h3 className="text-lg font-semibold text-blue-600">
            Total Products
          </h3>
          <p className="text-3xl font-bold mt-2">120</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border-l-4 border-green-500">
          <h3 className="text-lg font-semibold text-green-600">My Items</h3>
          <p className="text-3xl font-bold mt-2">8</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border-l-4 border-purple-500">
          <h3 className="text-lg font-semibold text-purple-600">Total Users</h3>
          <p className="text-3xl font-bold mt-2">35</p>
        </div>
      </div>

      {/* 👤 Logged-in User Info */}
      <h2 className="text-xl font-semibold text-gray-700 mb-4">User Details</h2>

      <ProfileCard />
    </section>
  );
};

export default Overview;
