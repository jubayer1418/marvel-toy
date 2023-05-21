import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/image/banner/logo.webp";
import { AuthContext } from "../../prividers/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handelLogout = () => {
    logOut();
  };
  return (
    <div className="navbar bg-base-100 h-40 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 mr-5 font-bold underline"
                    : " hover:text-green-500 mr-5 font-bold"
                }
                to={"/"}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 mr-5 font-bold underline"
                    : " hover:text-green-500 mr-5 font-bold"
                }
                to={"/blogs"}
              >
                Blogs
              </NavLink>
            </li>

            {user && (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-500 mr-5 font-bold underline"
                      : " hover:text-green-500 mr-5 font-bold"
                  }
                  to={"/addToy"}
                >
                  Add Toy
                </NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-500 mr-5 font-bold underline"
                      : " hover:text-green-500 mr-5 font-bold"
                  }
                  to={"/myToy"}
                >
                  My Toy
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 mr-5 font-bold underline"
                    : " hover:text-green-500 mr-5 font-bold"
                }
                to={"/allToy"}
              >
                All Toys
              </NavLink>
            </li>
            {user ? (
              <Link
                onClick={handelLogout}
                to={"register"}
                className="btn btn-success"
              >
                Logout
              </Link>
            ) : (
              <Link to={"login"} className="btn btn-success">
                Login
              </Link>
            )}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl h-28">
          <img className="h-full" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 mr-5 font-bold underline"
                  : " hover:text-green-500 mr-5 font-bold"
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 mr-5 font-bold underline"
                  : " hover:text-green-500 mr-5 font-bold"
              }
              to={"/blogs"}
            >
              Blogs
            </NavLink>
          </li>

          {user && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 mr-5 font-bold underline"
                    : " hover:text-green-500 mr-5 font-bold"
                }
                to={"/addToy"}
              >
                Add Toy
              </NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 mr-5 font-bold underline"
                    : " hover:text-green-500 mr-5 font-bold"
                }
                to={"/myToy"}
              >
                My Toy
              </NavLink>
            </li>
          )}
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 mr-5 font-bold underline"
                  : " hover:text-green-500 mr-5 font-bold"
              }
              to={"/allToy"}
            >
              All Toys
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden md:contents">
        {user ? (
          <Link
            onClick={handelLogout}
            to={"register"}
            className="btn btn-success"
          >
            Logout
          </Link>
        ) : (
          <Link to={"login"} className="btn btn-success">
            Login
          </Link>
        )}
      </div>
      <div className="pl-10 avatar">
        <div className="w-10 rounded-full">
          <img title={user?.displayName} src={user?.photoURL} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
