export default function SaveDetail({ ingredient, onSelectIdMeal }) {
  return (
    <li className="col-12 col-lg-4 card-group pt-3">
      <div className="card">
        <div className="card-body d-flex flex-column justify-content-between">
          <div className="pb-3">
            <h5 className="card-title">{ingredient?.strMeal}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card content.
            </p>
            <div>
              <button onClick={() => onSelectIdMeal(ingredient.idMeal)}>
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
