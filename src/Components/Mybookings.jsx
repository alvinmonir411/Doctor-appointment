import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { FaRegRegistered, FaArrowRightLong } from "react-icons/fa6";

const Mybookings = () => {
  const [bookedData, setBookedData] = useState([]);
  const deletBook = (id) => {
    const updatedData = bookedData.filter((item) => item.id !== id);
    setBookedData(updatedData);
    localStorage.setItem("booked", JSON.stringify(updatedData));
  };
  useEffect(() => {
    const storageData = localStorage.getItem("booked");
    const parsedData = storageData ? JSON.parse(storageData) : [];
    setBookedData(parsedData);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {bookedData.map(
        ({
          id,
          profileImage,
          status,
          experience,
          name,
          qualification,
          regNo,
        }) => (
          <div
            key={id}
            className="border rounded-xl overflow-hidden shadow-sm bg-white"
          >
            <div className="h-44 w-full overflow-hidden">
              <img
                src={profileImage}
                alt={name}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-5 flex flex-col justify-between h-[250px]">
              <div className="flex gap-2 mb-2">
                <span className="bg-emerald-100 text-emerald-700 text-xs font-medium px-3 py-1 rounded-full">
                  {status}
                </span>
                <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                  {experience}
                </span>
              </div>

              <div className="mb-3">
                <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
                <p className="text-xl">{qualification}</p>
                <p className="text-md flex items-center gap-1 mt-1">
                  <FaRegRegistered className="text-xl" />
                  Reg No: {regNo}
                </p>
              </div>

              <button
                onClick={() => {
                  deletBook(id);
                }}
                className="relative  inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <FaArrowRightLong />
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <FaArrowRightLong className="text-white" />
                </span>
                <span className="relative text-center w-full transition-colors duration-200 ease-in-out group-hover:text-white">
                  Cancle Booking
                </span>
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Mybookings;
