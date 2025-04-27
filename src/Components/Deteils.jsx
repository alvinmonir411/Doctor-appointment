import js from "@eslint/js";
import React from "react";
import { NavLink } from "react-router";
import { useLoaderData } from "react-router";
import { ToastContainer, toast } from "react-toastify";
const Deteils = () => {
  const data = useLoaderData();

  const {
    id,
    profileImage,
    status,
    experience,
    name,
    qualification,
    regNo,
    workingAt,
    consultationFee,
    availability,
  } = data;

  const setLocal = () => {
    const storedData = localStorage.getItem("booked");
    const BookdoctorData = storedData ? JSON.parse(storedData) : [];
    const allreadyBooked = BookdoctorData.find(
      (doctor) => doctor.id == data.id
    );

    if (allreadyBooked) {
      toast("already added!");
      return false;
    } else {
      BookdoctorData.push(data);
      localStorage.setItem("booked", JSON.stringify(BookdoctorData));
      toast("added succesfully");
      return true;
    }
  };

  const HandleBooking = (id) => {
    setLocal();
  };

  return (
    <div className="w-full px-4 md:px-10 lg:px-20 py-10 bg-gray-50">
      <div className="mb-12 text-center">
        <ToastContainer />
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Doctor’s Profile Details
        </h1>
        <p className="text-gray-600 mt-4 max-w-4xl mx-auto">
          Dr. {name} is a highly experienced and compassionate medical
          professional, currently practicing as a {qualification} with over{" "}
          <strong>{experience}</strong> years of clinical expertise. Known for a
          patient-centered approach, they are registered under Reg No:{" "}
          <strong>{regNo}</strong>, and have consistently received positive
          feedback for their professionalism, accurate diagnosis, and clear
          communication.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-start bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <div className="w-full md:w-1/3">
          <img
            src={profileImage}
            className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
            alt="Doctor's Profile"
          />
        </div>
        <div className="w-full md:w-2/3 space-y-2">
          <h2 className="text-4xl font-bold text-blue-800">{name}</h2>
          <p className="text-lg text-gray-700">{qualification}</p>
          <p className="text-gray-600">
            <strong>Working At:</strong>
            <br />
            <span className="text-xl font-bold">{workingAt}</span>
          </p>
          <div className="border-y border-dashed py-3">
            <p className="text-gray-500">Registration No: {regNo}</p>
          </div>
          <p className="text-gray-600">
            <strong>Available Days:</strong>{" "}
            <span className="text-amber-500 font-medium">
              {availability.join(", ")}
            </span>
          </p>
          <p className="text-gray-700">
            <strong>Consultation Fee:</strong> {consultationFee.currency}{" "}
            {consultationFee.amount}{" "}
            <small className="text-gray-500">({consultationFee.note})</small>
          </p>
          <p className="text-xl">
            experience:
            <span className="text-xl text-blue-600">{experience}</span>
          </p>
        </div>
      </div>

      <button
        onClick={() => HandleBooking(id)}
        className="w-2/3  mx-auto  border-blue-400 bg-blue-700 text-white rounded-4xl p-2 mt-10 text-center font-semibold text-xl"
      >
        Book Appointment Now
      </button>
    </div>
  );
};

export default Deteils;
