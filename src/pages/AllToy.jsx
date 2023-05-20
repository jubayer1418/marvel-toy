import { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";

const AllToy = () => {
  const [allToys, setAllToys] = useState([]);
  useEffect(() => {
    fetch("https://assinment-11-server-tau.vercel.app/allToys", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setAllToys(result);
      });
  }, []);
  return (
    <div className="overflow-x-auto">
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
            <AllToysRow key={toy._id} toy={toy} index={index}></AllToysRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToy;
