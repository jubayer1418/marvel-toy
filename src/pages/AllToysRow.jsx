import { Link, useLocation } from "react-router-dom";
import Tittle from "../utilities/Tittle";
import UpdateModal from "./Home/UpdateModal";

const AllToysRow = ({ toy, index, handleDelete, handleJobUpdate }) => {
  Tittle("View Details");
  const location = useLocation();
  console.log(location.pathname);
  const loca = location.pathname;
  const { _id, quantity, price, category, sellerName, name } = toy;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>{quantity}</td>
      <td>{price}</td>

      <th>
        {loca == "/myToy" ? (
          <>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-error mr-5"
            >
              Delete
            </button>
            <label htmlFor="my-modal-3" className="btn btn-success">
              Update
            </label>
            <UpdateModal
              handleJobUpdate={handleJobUpdate}
              toy={toy}
            ></UpdateModal>
          </>
        ) : (
          <Link to={`/viewDetails/${_id}`} className="btn btn-success mr-5">
            View Details
          </Link>
        )}
      </th>
    </tr>
  );
};

export default AllToysRow;
