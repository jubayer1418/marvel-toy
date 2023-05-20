import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../prividers/AuthProvider";
import AllToysRow from "./AllToysRow";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [allToys, setAllToys] = useState([]);
  console.log(allToys);
  const url = `https://assinment-11-server-tau.vercel.app/allToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setAllToys(result);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <div className="overflow-x-auto">
      <h1>{allToys.length}</h1>
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

export default MyToy;
