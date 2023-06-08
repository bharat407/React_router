import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto lg:px-4">
      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
      </Link>

      <nav>
        <ul className="text-richblack-100 flex gap-x-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Login - SignUp - LogOut - Dashboard */}
      <div className="flex items-center gap-x-4">
        {/* Login and SignUp buttons */}
        {!isLoggedIn && (
          <React.Fragment>
            <Link to="/login">
              <button
                className="bg-richblack-800 text-richblack-100 py-[8px] 
                      px-[12px] rounded-[8px] border border-richblack-700"
              >
                Log in
              </button>
            </Link>
            <Link to="/signup">
              <button
                className="bg-richblack-800 text-richblack-100 py-[8px] 
                      px-[12px] rounded-[8px] border border-richblack-700"
              >
                Sign up
              </button>
            </Link>
          </React.Fragment>
        )}

        {/* Logout and Dashboard buttons */}
        {isLoggedIn && (
          <React.Fragment>
            <Link to="/">
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged Out");
                }}
                className="bg-richblack-800 text-richblack-100 py-[8px] 
                      px-[12px] rounded-[8px] border border-richblack-700"
              >
                Log Out
              </button>
            </Link>
            <Link to="/dashboard">
              <button
                className="bg-richblack-800 text-richblack-100 py-[8px] 
                      px-[12px] rounded-[8px] border border-richblack-700"
              >
                Dashboard
              </button>
            </Link>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Navbar;
