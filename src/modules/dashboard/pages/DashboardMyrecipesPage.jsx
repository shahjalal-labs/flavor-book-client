import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useFetch from "../../../hooks/Usefetch";
import NoRecipe from "../../../pages/NoRecipe";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

const DashboardMyrecipes = () => {
  const { user } = useContext(AuthContext);

  const [recipes, setRecipes] = useState([]);

  const { data, loading } = useFetch(
    `https://worlds-recipes-sharing-server.vercel.app/api/v1/recipes?email=${user?.email}&limit=0`,
  );

  useEffect(() => {
    if (data) {
      setRecipes(data.data);
    }
  }, [data]);

  return (
    <div className="p-4 w-full max-w-full">
      <Helmet>
        <title>My Recipes || FlavorBook</title>
      </Helmet>

      <div className="mt-7 mb-4">
        {user?.displayName ? (
          <h1 className="font-bold text-sky-400 text-2xl">
            Recipes of{" "}
            <span className="text-pink-300 font-kaushan">
              {user.displayName}
            </span>
          </h1>
        ) : (
          <h1 className="text-2xl font-semibold">My Recipes</h1>
        )}
      </div>

      <hr className="border-gray-400 border-[1px]" />

      {loading && (
        <div className="flex justify-center items-center mt-7">
          <h1 className="text-sky-400 text-2xl">Loading...</h1>
        </div>
      )}

      {!loading && recipes.length > 0 ? (
        <div
          className="overflow-x-auto w-full mt-8"
          style={{ maxWidth: "100%" }}
        >
          <table className="table table-zebra w-full min-w-[700px]">
            <thead className="bg-cyan-100 text-cyan-800">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Cuisine</th>
                <th>Likes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {recipes.map((recipe, index) => (
                <tr key={recipe._id}>
                  <td>{index + 1}</td>
                  <td className="font-semibold text-sky-700">{recipe.title}</td>
                  <td className="text-purple-600">{recipe.cuisine || "-"}</td>
                  <td className="text-green-600 font-semibold">
                    {recipe.likeCount || 0}
                  </td>
                  <td>
                    <Link
                      to={`/recipes/${recipe._id}`}
                      className="btn btn-sm btn-sky btn-outline"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !loading && <NoRecipe />
      )}
    </div>
  );
};

export default DashboardMyrecipes;
