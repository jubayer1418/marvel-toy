/* eslint-disable react-hooks/rules-of-hooks */
import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../prividers/AuthProvider";
const SingUP = () => {
  const { Register } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;

    const img = form.img.value;

    const email = form.email.value;
    const password = form.password.value;
    Register(email, password)
      .then((result) => {
        const logUser = result.user;
        updateData(result.user);
        form.reset();
        console.log(logUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    const updateData = (user) => {
      updateProfile(user, {
        displayName: name,
        photoURL: img,
      })
        .then(() => {
          console.log("updatae");
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
  return (
    <>
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <iframe
              className="h-96 "
              src="https://embed.lottiefiles.com/animation/119048"
            ></iframe>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm s bg-base-100">
            <h1 className="text-5xl font-bold"> Please Register!</h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="url"
                  name="img"
                  placeholder="PhotoURL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-success">SingUP</button>
              </div>
            </form>
            <Link
              to={"/login"}
              className="label-text-alt link link-hover pl-8 text-sm underline text-blue-700"
            >
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center py-5">
        <button className=" btn btn-outline btn-success ">
          <FaGoogle className="text-5xl pr-3"></FaGoogle>
          <span className="text-2xl"> Google</span>
        </button>
      </div>
    </>
  );
};

export default SingUP;
