import { useNavigate } from "react-router-dom";
import { useMeals } from "../context/MealContext";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";

export default function MealDetail() {
  const { selectedMeal, isLoading, errorMsg, addCollection } = useMeals();
  const navigate = useNavigate();
  const title = selectedMeal.strMeal;
  const imgSrc = selectedMeal.strMealThumb;
  if (isLoading) return <Loading />;
  if (errorMsg) return <ErrorMessage />;
  function handleAddCollection() {
    addCollection();
    navigate("/app/save");
  }
  return (
    <>
      {selectedMeal.strMeal ? (
        <div className="container">
          <div className="row">
            <div className="col-4">
              <img className="img-fluid" src={imgSrc} alt={title} />
            </div>
            <div className="col-8">
              <h2>{title}</h2>
              <button onClick={handleAddCollection}>Add to Collection</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <h4 className="text-center">
              Details is empty go to search to find a meal
            </h4>
          </div>
        </div>
      )}
    </>
  );
}
