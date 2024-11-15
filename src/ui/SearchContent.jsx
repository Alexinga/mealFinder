import { useMeals } from "../context/MealContext";
import { handleSelectIdMeal } from "../util/btnFunctions";
import Card from "../ui/Card";
import CardItem from "../ui/CardItem";
import SearchMeal from "../ui/SearchMeal";
export default function SearchContent() {
  const { mealsIngredientList, errorMsg, isLoading } = useMeals();
  return (
    <>
      <SearchMeal />
      <Card
        data={mealsIngredientList}
        error={errorMsg}
        loading={isLoading}
        CardItemComponent={CardItem}
        onSelectIdMeal={handleSelectIdMeal}
      />
    </>
  );
}
