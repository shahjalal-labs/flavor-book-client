import IngredientCard from "./IngredientCard";
import RecipeMarketHeader from "./RecipeMarketHeader";
import { ingredients } from "./ingredient.constant";

const MarketHome = () => {
  // const [ingredients, setIngredients] = useState([]);

  return (
    <div className="max-w-screen-xl mx-auto p-2">
      <RecipeMarketHeader />
      <div className="grid max-lg:place-items-center lg:grid-cols-2  xl:grid-cols-3  2xl:grid-cols-3 gap-6 order max-sm:bg-gray-50 max-sm:shadow py-7  max-sm:py-0">
        {ingredients.map((item) => (
          <IngredientCard key={item.id} ingredient={item} />
        ))}
      </div>
    </div>
  );
};

export default MarketHome;
