import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import LottieAnimation from "../animation/Walking";
import { male_cooking } from "../animation";

const AddRecipe = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    image: "",
    title: "",
    ingredients: "",
    instructions: "",
    cuisine: "",
    prepTime: "",
    categories: [],
    userEmail: user?.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    const newCategories = checked
      ? [...formData.categories, value]
      : formData.categories.filter((c) => c !== value);
    setFormData({ ...formData, categories: newCategories });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = [];

    if (!formData.title || formData.title.length < 6) {
      errors.push("📌 Title must be at least 6 characters long.");
    }

    const ingredientsArray = formData.ingredients
      .split(",")
      .map((i) => i.trim())
      .filter((i) => i);

    if (ingredientsArray.length < 2) {
      errors.push("🥚 Please provide at least 2 ingredients.");
    }

    if (!formData.instructions || formData.instructions.length < 10) {
      errors.push("📖 Instructions must be at least 10 characters.");
    }

    if (!formData.cuisine) {
      errors.push("🍽️ Please select a cuisine.");
    }

    if (
      !formData.prepTime ||
      isNaN(formData.prepTime) ||
      Number(formData.prepTime) < 1
    ) {
      errors.push("⏱️ Preparation time must be at least 1 minute.");
    }

    if (formData.categories.length === 0) {
      errors.push("🧾 Please select at least one category.");
    }

    if (errors.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Please fix the following:",
        html: `<ul class="text-left">${errors
          .map((err) => `<li>${err}</li>`)
          .join("")}</ul>`,
      });
      return;
    }

    // Optional image validation warning
    const imagePattern = /^https?:\/\/.*\.(jpg|jpeg|png|webp|gif)$/i;
    if (formData.image && !imagePattern.test(formData.image)) {
      Swal.fire({
        icon: "warning",
        title: "Image URL might be invalid",
        text: "Please make sure it ends in .jpg, .png, .jpeg, .webp, or .gif",
      });
    }

    const newRecipe = {
      ...formData,
      likeCount: 0,
      ingredients: ingredientsArray,
    };

    const response = await fetch(
      `https://worlds-recipes-sharing-server.vercel.app/api/v1/create-recipe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRecipe),
      },
    );

    const data = await response.json();

    if (data.data.insertedId) {
      Swal.fire({
        icon: "success",
        title: "🎉 Recipe Submitted!",
        text: "Your recipe has been added successfully.",
        timer: 2000,
        showConfirmButton: false,
      });

      setTimeout(() => {
        navigate("/my-recipes");
      }, 2200);

      setFormData({
        image: "",
        title: "",
        ingredients: "",
        instructions: "",
        cuisine: "",
        prepTime: "",
        categories: [],
        userEmail: user?.email,
      });
    }
  };

  return (
    <>
      <div className="flex lg:flex-row-reverse items-center flex-col bg-gray-900 min-h-screen py-8">
        <div className="max-lg:max-w-[400px] max-w-[500px] mx-auto">
          <LottieAnimation animation={male_cooking}></LottieAnimation>
        </div>
        <div className="max-w-2xl mx-auto p-6 text-gray-200">
          <Helmet>
            <title>Add Recipe || FlavorBook</title>
          </Helmet>
          <h2 className="text-3xl font-bold text-center mb-6 text-indigo-400">
            Add a Recipe
          </h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-gray-800 p-6 shadow-xl shadow-black/50 rounded-lg"
          >
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
              className="w-full bg-gray-700 text-gray-200 border border-gray-600 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="text"
              name="title"
              placeholder="Recipe Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full bg-gray-700 text-gray-200 border border-gray-600 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />

            <label className="block font-medium text-gray-200">
              Ingredients (separate with commas)
            </label>
            <textarea
              name="ingredients"
              placeholder="e.g. eggs, flour, milk"
              value={formData.ingredients}
              onChange={handleChange}
              className="w-full bg-gray-700 text-gray-200 border border-gray-600 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="2"
              required
            />

            <textarea
              name="instructions"
              placeholder="Instructions"
              value={formData.instructions}
              onChange={handleChange}
              className="w-full bg-gray-700 text-gray-200 border border-gray-600 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="3"
              required
            />

            <select
              name="cuisine"
              value={formData.cuisine}
              onChange={handleChange}
              className="w-full bg-gray-700 text-gray-200 border border-gray-600 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">Select Cuisine</option>
              <option>Bangladeshi</option>
              <option>Italian</option>
              <option>Mexican</option>
              <option>Indian</option>
              <option>Chinese</option>
              <option>Others</option>
            </select>

            <input
              type="number"
              name="prepTime"
              placeholder="Preparation Time (minutes)"
              value={formData.prepTime}
              onChange={handleChange}
              className="w-full bg-gray-700 text-gray-200 border border-gray-600 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />

            <div>
              <p className="font-medium mb-1 text-gray-200">Categories:</p>
              <div className="flex flex-wrap gap-4">
                {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map(
                  (cat) => (
                    <label
                      key={cat}
                      className="flex items-center gap-2 text-gray-200"
                    >
                      <input
                        type="checkbox"
                        value={cat}
                        checked={formData.categories.includes(cat)}
                        onChange={handleCheckbox}
                        className="accent-indigo-400"
                      />
                      <span>{cat}</span>
                    </label>
                  ),
                )}
              </div>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-4 rounded w-full hover:bg-indigo-700 transition"
            >
              Add Recipe
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddRecipe;
