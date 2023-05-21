import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../prividers/AuthProvider";
import Tittle from "../utilities/Tittle";
import UpdateModal from "./Home/UpdateModal";

const MyToy = () => {
  const [selected, setSelected] = useState("Price-Ascending");

  Tittle("My Toys");
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  console.log(toys);
  const [allToys, setAllToys] = useState([]);
  const [control, setControl] = useState(false);
  const value = selected.split("-")[0].toLowerCase();
  const type = selected.split("-")[1].toLowerCase();
  const url = `https://assinment-11-server-tau.vercel.app/allToys?email=${user?.email}&value=${value}&type=${type}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setAllToys(result);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, control, selected]);
  const handleup = (id) => {
    fetch(`https://assinment-11-server-tau.vercel.app/allToys/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  };
  const handleJobUpdate = (data) => {
    fetch(`https://assinment-11-server-tau.vercel.app/allToys/${toys?._id}`, {
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
      });
  };
  const handleDelete = (id) => {
    fetch(`https://assinment-11-server-tau.vercel.app/allToys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount > 0) {
          setControl(!control);
          toast("Toy Deleted");
        }
      });
  };
  return (
    <div className="overflow-x-auto">
      <h1 className="text-2xl font-bold text-center">Sort by</h1>

      <div className="text-center my-5">
        <select
          onChange={(e) => setSelected(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option name="Price-Ascending">Price-Ascending</option>
          <option name="Price-Descending">Price-Descending</option>
        </select>
      </div>
      <table className="table w-full">
        {/* head*/}
        <thead>
          <tr>
            <th>No</th>
            <th>Seller Name</th>
            <th>Name</th>
            <th>Sub-category</th>
            <th>Available Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {allToys.map((toy, index) => (
            <tr key={toy._id}>
              <td>{index + 1}</td>
              <td>{toy.sellerName}</td>
              <td>{toy.name}</td>
              <td>{toy.category}</td>
              <td>{toy.quantity}</td>
              <td>{toy.price}</td>

              <td>
                <button
                  onClick={() => handleDelete(toy._id)}
                  className="btn btn-error mr-5"
                >
                  Delete
                </button>
              </td>
              <td>
                <label
                  onClick={() => handleup(toy._id)}
                  htmlFor="my-modal-3"
                  className="btn btn-success"
                >
                  Update
                </label>
                <UpdateModal
                  toys={toys}
                  handleJobUpdate={handleJobUpdate}
                ></UpdateModal>
              </td>
            </tr>
          ))}
          <ToastContainer />
        </tbody>
      </table>
    </div>
  );
};

export default MyToy;
