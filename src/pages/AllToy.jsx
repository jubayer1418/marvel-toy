import { useEffect, useState } from "react";
import Tittle from "../utilities/Tittle";
import AllToysRow from "./AllToysRow";

const AllToy = () => {
  Tittle("All Toys");
  const [name, setName] = useState("");

  console.log(name);
  const [allToys, setAllToys] = useState([]);
  const handleSearch = () => {
    fetch(`https://assinment-11-server-tau.vercel.app/toysearch/${name}`)
      .then((res) => res.json())
      .then((result) => {
        setAllToys(result);
      });
  };
  useEffect(() => {
    fetch(`https://assinment-11-server-tau.vercel.app/allToys`)
      .then((res) => res.json())
      .then((result) => {
        setAllToys(result);
      });
  }, [name]);
  return (
    <div className="overflow-x-auto">
      <div className="text-center my-5">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Please enter toy name"
          className="input input-bordered input-success w-full max-w-xs"
        />
        <button onClick={handleSearch} className="btn btn-success ml-5">
          Search
        </button>
      </div>

      <table className="table w-full mx-auto">
        {/* head*/}
        <thead>
          <tr>
            <th>No</th>
            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Available Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {allToys.map((toy, index) => (
            <AllToysRow key={toy._id} toy={toy} index={index}></AllToysRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToy;
