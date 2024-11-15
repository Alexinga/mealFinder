import { useMeals } from "../context/MealContext";

export default function ErrorMessage() {
  const { mealsIngredientList, errorMsg } = useMeals();
  if (mealsIngredientList === null)
    return (
      <div className="container">
        <h2 className="text-center">No Meals Found</h2>
      </div>
    );
  return (
    <div className="container">
      <h2 className="text-center">There was an error {errorMsg}</h2>
    </div>
  );
}
