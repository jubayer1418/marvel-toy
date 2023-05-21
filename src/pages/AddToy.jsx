import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../prividers/AuthProvider";
import Tittle from "../utilities/Tittle";
const AddToy = () => {
  Tittle("Add Toys");
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    watch,
    formState: { errors },
  } = useForm();

  console.log();
  const onSubmit = (data, e) => {
    fetch("https://assinment-11-server-tau.vercel.app/allToys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          toast("Add a Toy ");
          e.target.reset();
        }
        console.log(result);
      });
  };

  return (
    <div className="w-[50%] mx-auto shadow-2xl p-20 mb-5">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <h1 className="text-3xl font-bold text-green-500 text-center">
          Please Add Toy
        </h1>
        <p className="text-center">
          {errors.rating && (
            <span className="text-red-500 font-medium ">
              please inter rating 0 to 5 number
            </span>
          )}
        </p>
        <input
          type="url"
          placeholder="Photo URL"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          {...register("img")}
        />

        <input
          type="text"
          placeholder="Your Toy Name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          {...register("name", { required: true })}
        />
        <input
          type="text"
          placeholder="Seler Name"
          value={user?.displayName}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          {...register("sellerName", { required: true })}
        />
        <input
          type="email"
          placeholder="Seller Email"
          value={user?.email}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          {...register("email", { required: true })}
        />
        <div className="flex gap-5">
          <select
            className="select select-bordered w-full max-w-xs"
            {...register("category")}
          >
            <option value="marvel">marvel</option>
            <option value="star war">star war</option>
            <option value="transformers">transformers</option>
          </select>
          <input
            type="number"
            placeholder="Price"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            {...register("price", { required: true })}
          />
        </div>
        <div className="flex gap-5">
          <input
            type="number"
            placeholder="Rating"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            {...register("rating", { required: true, min: 0, max: 5 })}
          />
          <input
            type="number"
            placeholder="Quantity"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            {...register("quantity", { required: true })}
          />
        </div>
        <textarea
          type="text"
          placeholder="description"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          {...register("description", { required: true })}
        />

        <input
          className="btn btn-success w-full"
          value="Add Toy"
          type="submit"
        />
        <ToastContainer />
      </form>
    </div>
  );
};

export default AddToy;
