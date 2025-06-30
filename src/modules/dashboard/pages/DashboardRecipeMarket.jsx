import { ingredients } from "../../RecipieMarket/ingredient.constant";

const DashboardRecipeMarket = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-xl overflow-x-auto">
      <h2 className="text-2xl font-semibold text-cyan-600 mb-4">
        🛒 Ingredient Market Overview
      </h2>
      <table className="table table-zebra w-full min-w-[600px]">
        <thead className="bg-cyan-50 text-cyan-700">
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((item, index) => (
            <tr key={item.id}>
              <td className="font-semibold text-gray-600">{index + 1}</td>
              <td className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded object-cover border border-sky-300"
                />
                <div>
                  <p className="font-bold text-purple-700">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </td>
              <td className="text-sky-700 font-medium">{item.quantity}</td>
              <td className="text-green-600 font-semibold">${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardRecipeMarket;
