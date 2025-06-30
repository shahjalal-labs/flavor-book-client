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
    axios
      .get("https://worldwide-recipe-chefs-sharing-serv.vercel.app/api/v1/recipes")
      .then((res) => {
        const data = res.data.data || [];
        setInitialRecipes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
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

  return (
    <div className="w-full p-4 space-y-6">
      <Helmet>
        <title>Dashboard – All Recipes</title>
      </Helmet>

      <h2 className="text-2xl font-bold text-cyan-600 text-center">
        Dashboard: All Recipes
      </h2>

      {/* Filter & Sort */}
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <div>
          <label className="font-medium text-purple-600 mr-2">Cuisine:</label>
          <select
            className="border border-cyan-400 rounded px-3 py-1"
            value={selectedCuisine}
            onChange={(e) => setSelectedCuisine(e.target.value)}
          >
            {cuisineOptions.map((cuisine, index) => (
              <option key={index} value={cuisine}>
                {cuisine}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="font-medium text-purple-600 mr-2">Sort by:</label>
          <select
            className="border border-purple-400 rounded px-3 py-1"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="name-asc">Name: A–Z</option>
            <option value="name-desc">Name: Z–A</option>
            <option value="likes-asc">Likes: Low–High</option>
            <option value="likes-desc">Likes: High–Low</option>
          </select>
        </div>
      </div>

      {/* Responsive Scrollable Table */}
      <div className="w-full overflow-x-auto rounded-lg border border-sky-100 shadow-sm">
        <table className="table w-max min-w-full">
          <thead className="bg-sky-100 text-sky-800 text-left">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Cuisine</th>
              <th>Likes</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((r, i) => (
              <tr key={r._id} className="hover:bg-purple-50 transition-all">
                <td className="py-2 px-4">{i + 1}</td>
                <td className="py-2 px-4 text-cyan-800 font-medium">
                  {r.title}
                </td>
                <td className="py-2 px-4">{r.cuisine || "—"}</td>
                <td className="py-2 px-4 text-sky-600">{r.likeCount || 0}</td>
                <td className="py-2 px-4 text-gray-500">
                  {r.author || "Anonymous"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardAllRecipes;
