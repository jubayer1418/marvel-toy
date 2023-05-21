import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Tittle from "../utilities/Tittle";
const AllToysRow = ({ toy, index }) => {
  Tittle("View Details");

  // console.log(location.pathname);

  const { _id, quantity, price, category, sellerName, name } = toy;
  console.log(toy);

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>{quantity}</td>
      <td>{price}</td>

      <th>
        <Link to={`/viewDetails/${_id}`} className="btn btn-success mr-5">
          View Details
        </Link>
      </th>
    </tr>
  );
};

export default AllToysRow;
