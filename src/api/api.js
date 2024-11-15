export async function GetMealFromIngredientList(ingredient) {
  //api had a "chicken_breast lets see how it handles without the "_" "
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    if (!res.ok) {
      throw new Error("something went wrong");
    }
    const data = await res.json();
    // console.log(data.meals);
    return data.meals;
  } catch (err) {
    if (err.name !== "AbortError") {
      throw new Error(`${err.message}`);
    }
  }
}

export async function GetSelectedMealID(id) {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    if (!res.ok) {
      throw new Error("something went wrong");
    }
    const data = await res.json();
    // console.log(data.meals);
    return data.meals.at(0);
  } catch (err) {
    if (err.name !== "AbortError") {
      throw new Error(`${err.message}`);
    }
  }
}
