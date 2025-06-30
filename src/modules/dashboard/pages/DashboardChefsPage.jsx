import { chefs } from "../../chef/chef.constant";

const DashboardChefsPage = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-xl overflow-x-auto">
      <h2 className="text-2xl font-semibold text-purple-600 mb-4">
        👨‍🍳 Chef Directory (Dashboard View)
      </h2>
      <table className="table table-zebra w-full min-w-[700px]">
        <thead className="bg-purple-100 text-purple-700">
          <tr>
            <th>#</th>
            <th>Chef</th>
            <th>Specialty</th>
            <th>Rate/hr</th>
          </tr>
        </thead>
        <tbody>
          {chefs.map((chef, index) => (
            <tr key={chef.id}>
              <td className="font-semibold text-gray-600">{index + 1}</td>
              <td className="flex items-center gap-3">
                <img
                  src={chef.avatar}
                  alt={chef.name}
                  className="w-14 h-14 rounded-full border border-sky-300 object-cover"
                />
                <div>
                  <p className="font-bold text-cyan-800">{chef.name}</p>
                  <p className="text-sm text-gray-500">{chef.location}</p>
                </div>
              </td>
              <td className="text-sky-700 font-medium">{chef.specialty}</td>
              <td className="text-green-600 font-semibold">
                ${chef.pricePerHour}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardChefsPage;
