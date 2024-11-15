import Loading from "../ui/Loading";
import ErrorMessage from "./ErrorMessage";

export default function Card({
  data,
  error,
  loading,
  CardItemComponent,
  onSelectIdMeal,
}) {
  if (loading) return <Loading />;
  if (data === null || error) return <ErrorMessage />;
  return (
    <div className="container">
      <ul className="list-unstyled row">
        {data?.map((ingredient, index) => (
          <CardItemComponent
            key={index}
            ingredient={ingredient}
            onSelectIdMeal={onSelectIdMeal}
          />
        ))}
      </ul>
    </div>
  );
}
