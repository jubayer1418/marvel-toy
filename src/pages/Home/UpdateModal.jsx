import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../prividers/AuthProvider";

const UpdateModal = (props) => {
  const {
    _id,
    img,
    description,
    quantity,
    rating,
    price,
    category,
    email,
    sellerName,
    name,
  } = props.toy;
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    watch,
    formState: { errors },
  } = useForm();
  const { handleJobUpdate } = props;
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="w-full mx-auto shadow-2xl p-10 ">
            <form
              onSubmit={handleSubmit(handleJobUpdate)}
              className="space-y-8"
            >
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
                defaultValue={img}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                {...register("img")}
              />
              <input
                className="text-input hidden"
                {...register("_id")}
                value={_id}
              />
              <input
                type="text"
                placeholder="Your Name"
                defaultValue={name}
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
                  className="select select-bordered  max-w-xs"
                  {...register("category")}
                >
                  <option value="marvel">marvel</option>
                  <option value="star war">star war</option>
                  <option value="transformers">transformers</option>
                </select>
                <input
                  type="number"
                  placeholder="Price"
                  defaultValue={price}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  {...register("price", { required: true })}
                />
              </div>
              <div className="flex gap-5">
                <input
                  type="number"
                  placeholder="Rating"
                  defaultValue={rating}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  {...register("rating", { required: true, min: 0, max: 5 })}
                />
                <input
                  type="number"
                  placeholder="Quantity"
                  defaultValue={quantity}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  {...register("quantity", { required: true })}
                />
              </div>
              <textarea
                type="text"
                placeholder="description"
                defaultValue={description}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                {...register("description", { required: true })}
              />

              <input
                className="btn btn-success w-full"
                value="Add Toy"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateModal;
