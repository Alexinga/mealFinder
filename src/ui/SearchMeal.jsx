import { useMeals } from "../context/MealContext";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SearchMeal() {
  const [ingredient, setIngredient] = useState("");
  const navigate = useNavigate();
  const { fetchMealsIngredient } = useMeals();
  const { userLogout } = useAuth();
  function handleSearch(e) {
    e.preventDefault();
    fetchMealsIngredient(ingredient);
  }
  function handleLogout() {
    userLogout();
    navigate("/");
  }
  return (
    <div className="container mt-3">
      <div className="row align-items-center">
        <div className="col-md-10">
          <h2>Welcome to app page</h2>
          <form onSubmit={handleSearch}>
            <div className="mb-3">
              <label htmlFor="ingredient" className="form-label">
                Search a meal with just an ingredient
              </label>
              <input
                id="ingredient"
                type="text"
                className="form-control border border-black"
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
              ></input>
            </div>
            <button>Get Started</button>
          </form>
        </div>
        <div className="col-md-2">
          <button onClick={handleLogout}>logout</button>
        </div>
      </div>
    </div>
  );
}
