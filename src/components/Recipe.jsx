import { Link, useLocation, useNavigate } from "react-router";
import { motion } from "motion/react";
import Button from "./Button";
import Swal from "sweetalert2";

const Recipe = ({ recipe, setRecipes = () => {}, recipes = [] }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { image, title, cuisine, likeCount } = recipe;

  const hanldeDelete = async (id) => {
    // const res = await fetch(`https://worldwide-recipe-chefs-sharing-serv.vercel.app/api/v1/recipe/${id}`, {
    const res = await fetch(
      `https://worlds-recipes-sharing-server.vercel.app/api/v1/recipe/${id}`,
      {
        method: "DELETE",
      },
    );
    if (!res.ok) {
      throw new Error(
        `Failed to delete recipe, status:${res.status}, ${res.statusText}`,
      );
    }

    const result = await res.json();
    if (result?.data?.deletedCount) {
      if (setRecipes && typeof setRecipes === "function") {
        setRecipes(recipes.filter((r) => r._id !== id));
      }

      Swal.fire({
        title: "Success",
        text: "Recipe deleted successfully",
        icon: "success",
        timer: 1000,
        showConfirmButton: false,
      });
    }
  };
  return (
    /*     <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.1,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        className="rounded-lg hover:shadow-md transition duration-300 max-w-[350px] shadow-xl bg-gradient-to-r from-primary/10 via-secondary/10 via-cyan-900 to-accent/10 max-sm:min-w-[300px] hover-effect"
      >
        <img
          src={image || "https://via.placeholder.com/400x250?text=No+Image"}
          // alt={title}
          className="w-[200px] object-cover rounded-xl shadow-xl mx-auto mt-2 max-h-[200px]"
        />

        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold dark:text-sky-400">{title}</h3>
          <p className="text-sm text-gray-600">Cuisine: {cuisine}</p>
          <p className="text-sm text-gray-600">Likes: {likeCount}</p>
          {pathname == "/my-recipes" && (
            <div className="flex gap-3 flex-col">
              <div className="flex-1 text-white">
                <Link to={`/update/${recipe._id}`}>
                  <Button label={"Update "} className={"w-full"} />
                </Link>
              </div>
              <div
                onClick={() => hanldeDelete(recipe?._id)}
                className="flex-1  text-white "
              >
                <Button label={"Delete"} className={"flex-1 w-full"} />
              </div>
            </div>
          )}
          <button
            className="w-full btn btn-outline btn-primary 500   hover:bg-purple-700 text-sm rounded-full"
            onClick={() => navigate(`/recipes/${recipe._id}`)}
          >
            View Details
          </button>
        </div>
      </motion.div>
    </> */

    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.1,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        className="rounded-lg hover:shadow-lg transition duration-300 max-w-[350px] shadow-xl bg-gradient-to-br from-slate-800 via-gray-900 to-gray-950 hover:shadow-indigo-500/40 max-sm:min-w-[300px]"
      >
        <img
          src={image || "https://via.placeholder.com/400x250?text=No+Image"}
          className="w-[200px] object-cover rounded-xl shadow-lg mx-auto mt-2 max-h-[200px] border border-gray-700"
        />

        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-indigo-400">{title}</h3>
          <p className="text-sm text-slate-300">Cuisine: {cuisine}</p>
          <p className="text-sm text-slate-300">Likes: {likeCount}</p>

          {pathname == "/my-recipes" && (
            <div className="flex gap-3 flex-col">
              <div className="flex-1 text-white">
                <Link to={`/update/${recipe._id}`}>
                  <Button
                    label={"Update "}
                    className={"w-full bg-indigo-600 hover:bg-indigo-700"}
                  />
                </Link>
              </div>
              <div
                onClick={() => hanldeDelete(recipe?._id)}
                className="flex-1 text-white"
              >
                <Button
                  label={"Delete"}
                  className={"flex-1 w-full bg-gray-700 hover:bg-gray-800"}
                />
              </div>
            </div>
          )}

          <button
            className="w-full btn btn-outline border-indigo-500 text-indigo-400 hover:bg-indigo-700 hover:text-white text-sm rounded-full transition"
            onClick={() => navigate(`/recipes/${recipe._id}`)}
          >
            View Details
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Recipe;
