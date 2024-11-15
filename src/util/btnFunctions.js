export function handleSelectIdMeal(id, navigate, fetchMealId) {
  fetchMealId(id);
  navigate(`/app/details/${id}`);
}
