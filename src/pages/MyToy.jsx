import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../prividers/AuthProvider";
import Tittle from "../utilities/Tittle";
import AllToysRow from "./AllToysRow";

const MyToy = () => {
  const [selected, setSelected] = useState("Price-Ascending");

  Tittle("My Toys");
  const { user } = useContext(AuthContext);
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
            <AllToysRow
              key={toy._id}
              toy={toy}
              index={index}
              handleDelete={handleDelete}
              setControl={setControl}
              control={control}
            ></AllToysRow>
          ))}
          <ToastContainer />
        </tbody>
      </table>
    </div>
  );
};

export default MyToy;
