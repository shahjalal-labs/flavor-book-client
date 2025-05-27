import IngredientCard from "./IngredientCard";
import RecipeMarketHeader from "./RecipeMarketHeader";
import { ingredients } from "./ingredient.constant";

const MarketHome = () => {
  // const [ingredients, setIngredients] = useState([]);

  return (
    <div className="max-w-screen-xl mx-auto p-2">
      <RecipeMarketHeader />
      <div className="grid max-sm:justify-items-center md:grid-cols-2  xl:grid-cols-3 gap-6">
        {ingredients.map((item) => (
          <IngredientCard key={item.id} ingredient={item} />
        ))}
      </div>
    </div>
  );
};

export default MarketHome;
