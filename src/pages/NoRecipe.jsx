import { Link } from "react-router";

const NoRecipe = () => {
  return (
    <div className="flex justify-center items-center min-h-[30vh] bg-gray-900">
      <div className="border rounded-lg hover:shadow-2xl transition duration-300 shadow-lg border-indigo-500 bg-gradient-to-b from-gray-800 to-gray-900 mx-auto mt-10 p-5 w-fit">
        <h1 className="text-gray-200 text-xl">
          You have no recipes, please add one
        </h1>
        <div className="text-center mt-4">
          <Link to="/add-recipe">
            <button className="btn btn-primary btn-md bg-purple-700 hover:bg-purple-800 text-white border-none shadow-lg rounded-full">
              Add Recipe
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoRecipe;
