/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../prividers/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { SingIn, handlegoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleGoogle = () => {
    handlegoogle();
  };
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    SingIn(email, password)
      .then((result) => {
        const loguser = result.user;
        console.log(loguser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const err = error.message;
        setError("email address or password doesn't match");
      });
  };
  return (
    <>
      <div className="hero  bg-base-200">
        <div className="hero-content md:flex">
          <iframe
            className="h-96 "
            src="https://embed.lottiefiles.com/animation/119048"
          ></iframe>
          <div>
            {" "}
            <div className="text-center ">
              <h1 className="text-red-500">{error}</h1>
              <h1 className="text-5xl font-bold"> Please Login!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-success">Login</button>
                </div>
              </form>
              <Link
                to={"/register"}
                className="label-text-alt link link-hover p-5 text-blue-700 underline"
              >
                New to auth master?Please register?
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-5">
        <button
          onClick={handleGoogle}
          className=" btn btn-outline btn-success "
        >
          <FaGoogle className="text-5xl pr-3"></FaGoogle>
          <span className="text-2xl"> Google</span>
        </button>
      </div>
    </>
  );
};

export default Login;
