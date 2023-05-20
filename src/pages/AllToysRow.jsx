import { useLocation } from "react-router-dom";

const AllToysRow = ({ toy, index }) => {
  const location = useLocation();
  console.log(location.pathname);
  const loca = location.pathname;
  const {
    img,
    description,
    quantity,
    rating,
    price,
    category,
    email,
    sellerName,
    name,
  } = toy;
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
            <button className="btn btn-error mr-5">Delete</button>
            <button className="btn btn-success">Update</button>
          </>
        ) : (
          <button className="btn btn-success mr-5">View Details</button>
        )}
      </th>
    </tr>
  );
};

export default AllToysRow;
