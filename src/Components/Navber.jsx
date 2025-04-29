import React, { use } from "react";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router";

const Navber = () => {
  const NavBer = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-500 border-b-2" : ""
        }
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-500 border-b-2" : ""
        }
        to="/Mybookings"
      >
        My-Bookings
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-500 border-b-2" : ""
        }
        to="/Blogs"
      >
        Blogs
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-500 border-b-2" : ""
        }
        to="/Contact"
      >
        Contact Us
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm pt-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <FiMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {NavBer}
          </ul>
        </div>
        <NavLink className="hidden md:flex justify-center gap-1 items-center">
          <img src="/logo.png" alt="logo" />
          <p className=" md:text-xl font-bold text-blue-600  uppercase">
            Doctors-Hub
          </p>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex justify-between gap-3 ">
        {NavBer}
      </div>
      <div className="navbar-end gap-2">
        <NavLink to="/LogIn" className="btn bg-blue-600 text-white rounded-4xl">
          Log-In
        </NavLink>
        <NavLink
          to="/SignUp"
          className="btn bg-blue-600 text-white rounded-4xl"
        >
          Sign-Up
        </NavLink>
      </div>
    </div>
  );
};

export default Navber;
