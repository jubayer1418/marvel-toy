import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tittle from "../../utilities/Tittle";

const CatagoryDetails = () => {
  Tittle("Category Details");
  const params = useParams();
  console.log(params.id);
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    fetch(`https://assinment-11-server-tau.vercel.app/catagories/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, [params]);
  const { Picture, Name, Price, description } = categories;
  return (
    <div className="card card-side bg-base-100 shadow-xl w-[70%] mx-auto">
      <figure className="w-full">
        <img src={Picture} alt="Movie" />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-3xl">{Name}</h2>
        <div className="flex justify-between w-full text-green-400 text-xl p-8">
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
              checked
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
        <p className="text-3xl font-bold pt-8">description</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CatagoryDetails;
