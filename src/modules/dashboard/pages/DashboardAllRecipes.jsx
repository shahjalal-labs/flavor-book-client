import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const DashboardAllRecipes = () => {
  const [initialRecipes, setInitialRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [sortOption, setSortOption] = useState("name-asc");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/v1/recipes")
      .then((res) => {
        const data = res.data.data || [];
        setInitialRecipes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching recipes:", err);
        setLoading(false);
      });
  }, []);

  const cuisineOptions = [
    "All",
    ...new Set(initialRecipes.map((r) => r.cuisine).filter(Boolean)),
  ];

  useEffect(() => {
    let filtered = [...initialRecipes];

    if (selectedCuisine !== "All") {
      filtered = filtered.filter((r) => r.cuisine === selectedCuisine);
    }

    switch (sortOption) {
      case "name-asc":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "likes-asc":
        filtered.sort((a, b) => (a.likeCount || 0) - (b.likeCount || 0));
        break;
      case "likes-desc":
        filtered.sort((a, b) => (b.likeCount || 0) - (a.likeCount || 0));
        break;
      default:
        break;
    }

    setRecipes(filtered);
  }, [initialRecipes, selectedCuisine, sortOption]);

  if (loading) {
    return (
      <div className="text-center py-20 text-sky-500">Loading recipes...</div>
    );
  }

  return (
    <div className="p-6 bg-gradient-to-br from-cyan-50 via-white to-purple-50 rounded-xl shadow">
      <Helmet>
        <title>Dashboard Recipes || FlavorBook</title>
      </Helmet>

      <h1 className="text-3xl font-bold text-center text-purple-600 mb-6">
        Dashboard: All Recipes
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 justify-center mb-6">
        <div>
          <label className="font-medium text-cyan-700 mr-2">Cuisine:</label>
          <select
            value={selectedCuisine}
            onChange={(e) => setSelectedCuisine(e.target.value)}
            className="select select-bordered border-cyan-300 text-gray-800"
          >
            {cuisineOptions.map((cuisine, i) => (
              <option key={i} value={cuisine}>
                {cuisine}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-medium text-purple-700 mr-2">Sort by:</label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="select select-bordered border-purple-300 text-gray-800"
          >
            <option value="name-asc">Name: A–Z</option>
            <option value="name-desc">Name: Z–A</option>
            <option value="likes-asc">Likes: Low–High</option>
            <option value="likes-desc">Likes: High–Low</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-sky-200">
        <table className="table table-zebra text-sm md:text-base">
          <thead className="bg-sky-100 text-sky-800">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Cuisine</th>
              <th>Likes</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {recipes.length > 0 ? (
              recipes.map((recipe, index) => (
                <tr key={recipe._id} className="hover:bg-purple-50">
                  <th>{index + 1}</th>
                  <td className="font-medium text-purple-600">
                    {recipe.title}
                  </td>
                  <td>{recipe.cuisine || "Unknown"}</td>
                  <td className="text-sky-600">{recipe.likeCount || 0}</td>
                  <td className="text-gray-500">
                    {recipe.author || "Anonymous"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center text-gray-500 py-4">
                  No recipes found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardAllRecipes;
