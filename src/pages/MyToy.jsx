import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../prividers/AuthProvider";
import AllToysRow from "./AllToysRow";

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [allToys, setAllToys] = useState([]);
  const [control, setControl] = useState(false);
  console.log(allToys);
  const url = `https://assinment-11-server-tau.vercel.app/allToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setAllToys(result);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, control]);
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
        }
        console.log(result);
      });
  };

  const handleDelete = (id) => {
    fetch(`https://assinment-11-server-tau.vercel.app/allToys`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount > 0) {
          setControl(!control);
        }
      });
  };
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
            <AllToysRow
              key={toy._id}
              toy={toy}
              index={index}
              handleDelete={handleDelete}
              handleJobUpdate={handleJobUpdate}
            ></AllToysRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToy;
