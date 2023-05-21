import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tittle from "../utilities/Tittle";
import UpdateModal from "./Home/UpdateModal";
const AllToysRow = ({ toy, index, handleDelete, control, setControl }) => {
  Tittle("View Details");
  const location = useLocation();
  // console.log(location.pathname);
  const loca = location.pathname;
  const { _id, quantity, price, category, sellerName, name } = toy;
  console.log(_id);
  const handleJobUpdate = (data) => {
    console.log(data);
    fetch(`https://assinment-11-server-tau.vercel.app/allToys/${data._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          setControl(!control);
          toast("Toy Update");
        }
        console.log(result);
      });
  };
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
