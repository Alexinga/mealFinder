import { useMeals } from "../context/MealContext";
import { useNavigate } from "react-router-dom";
export default function CardItem({ ingredient, onSelectIdMeal }) {
  const { fetchMealId } = useMeals();
  const navigate = useNavigate();
  const title = ingredient.strMeal;
  const imgSrc = ingredient.strMealThumb;
  const id = ingredient.idMeal;
  return (
    <li className="col-12 col-lg-4 card-group pt-3">
      <div className="card">
        <img src={imgSrc} className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column justify-content-between">
          <div className="pb-3">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card content.
            </p>
          </div>
          <div>
            <button
              onClick={() => onSelectIdMeal(id, navigate, fetchMealId)}
              href="#"
              className="btn btn-primary"
            >
              Go to details
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
