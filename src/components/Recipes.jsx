import { Link, useLocation } from "react-router";

import AwesomeReveal from "../animation/AwesomeReveal";
import Recipe from "./Recipe";
import Button from "./Button";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Recipes = () => {
  const location = useLocation();

  const [initialRecipes, setInitialRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [sortOption, setSortOption] = useState("name-asc");
  const [loading, setLoading] = useState(true);

  // Fetch recipes from API
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
    return <div className="text-center py-20">Loading recipes...</div>;
  }

  return (
    <AwesomeReveal>
      {location.pathname === "/all-recipes" && (
        <>
          <Helmet>
            <title>All Recipes || FlavorBook</title>
          </Helmet>
          <h1 className="text-primary font-bold text-xl my-5 max-sm:text-center">
            Total Recipes: {recipes.length.toString().padStart(2, "0")}
          </h1>

          <div className="flex flex-wrap gap-4 max-sm:justify-center items-center mb-6">
            <div>
              <label className="font-medium text-teal-600 mr-2">
                Filter by Cuisine:
              </label>
              <select
                className="border border-gray-300 rounded px-3 py-1 bg-white text-gray-800 shadow"
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
              <label className="font-medium text-teal-600 mr-2">Sort By:</label>
              <select
                className="border border-sky-300 rounded px-3 py-1 bg-white text-gray-800 shadow"
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
        </>
      )}

      <div className="grid grid-cols-1 max-sm:place-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto sm:w-11/12">
        {recipes.map((r) => (
          <Recipe key={r._id} recipe={r} />
        ))}
      </div>

      {location.pathname === "/" && recipes.length > 5 && (
        <div className="flex justify-center items-center mt-10 pb-3">
          <Link to="/all-recipes">
            <Button label="View More Recipes" />
          </Link>
        </div>
      )}
    </AwesomeReveal>
  );
};

export default Recipes;
