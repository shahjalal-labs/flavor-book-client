import { Link } from "react-router-dom";

const IngredientCard = ({ ingredient }) => {
  return (
    <div className="  bg-gray-100  rounded-lg shadow-md p-4 hover:shadow-2xl transition-transform w-fit max-sm:hover:scale-96 hover:scale-99 hover:bg-gray-300 xl:scale-85 xl:hover:scale-87 2xl:scale-100 2xl:hover:scale-101 ">
      <img
        src={ingredient.image}
        alt={ingredient.name}
        className="max-w-[300px] max-h-[300px] object-cover rounded-md mb-4 scale-80"
      />
      <h3 className="text-lg  font-semibold text-gray-400 ">
        {ingredient.name}
      </h3>
      <p className="text-sm text-gray-500  mb-2 max-w-[200px]">
        {ingredient.description}
      </p>
      <div className="flex justify-between text-sm text-gray-600">
        <span>💰 ${ingredient.price}</span>
        <span>📦 {ingredient.quantity}</span>
      </div>
      <Link
        to={`/recipe-market/${ingredient.id}`}
        className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        View Details
      </Link>
    </div>
  );
};

export default IngredientCard;
