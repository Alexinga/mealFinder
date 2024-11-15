import { useMeals } from "../context/MealContext";
import Card from "./Card";
import SaveDetail from "./SaveDetail";

export default function Save() {
  const { collection, isLoading, errorMsg, deleteCollection } = useMeals();
  return (
    <>
      <Card
        data={collection}
        loading={isLoading}
        error={errorMsg}
        CardItemComponent={SaveDetail}
        onSelectIdMeal={deleteCollection}
      />
    </>
  );
}
