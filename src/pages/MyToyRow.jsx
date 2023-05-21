import UpdateModal from "./Home/UpdateModal";

const MyToyRow = ({ toy, index, handleJobUpdate, handleDelete }) => {
  const { _id, quantity, price, category, sellerName, name } = toy;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>{quantity}</td>
      <td>{price}</td>

      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-error mr-5"
        >
          Delete
        </button>
      </td>
      <td>
        {" "}
        <label htmlFor="my-modal-3" className="btn btn-success">
          Update
        </label>
        <UpdateModal handleJobUpdate={handleJobUpdate} toy={toy}></UpdateModal>
      </td>
    </tr>
  );
};

export default MyToyRow;
