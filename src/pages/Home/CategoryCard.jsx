import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { Picture, Name, Price, Rating, Category, description, _id } = category;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={Picture} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{Name}</h2>
        <div className="flex justify-between w-full text-green-400 text-xl pb-4">
          <div className="rating">
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-green-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-green-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-green-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-green-400"
            />
            <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-green-400"
            />
          </div>
          <h1>price: $ {Price}</h1>
        </div>
        <div className="card-actions">
          <Link to={`/catagoryDetails/${_id}`} className="btn btn-success">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
