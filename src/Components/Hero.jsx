import React, { useEffect, useState } from "react";
import Doctors from "./Doctors";
import { NavLink, useLoaderData } from "react-router";

const Hero = () => {
  const datas = useLoaderData();
  const [display, setdisplay] = useState(datas);
  const [Show, ShowAll] = useState(false);
  const handleShowHide = () => {
    ShowAll(!Show);
    {
      if (Show) {
        window.scrollTo({
          top: 300,
          behavior: "smooth",
        });
      }
    }
  };
  useEffect(() => {
    if (Show) {
      setdisplay(datas);
    } else {
      setdisplay(datas.slice(0, 10));
    }
  }, [Show, datas]);
  return (
    <div className=" bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      <div className="  bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] border-2  border-t-4 border-amber-100 shadow-2xs rounded-3xl mb-10">
        <h1 className="md:text-4xl font-bold text-xl text-center mt-7">
          Dependable Care, Backed by Trusted <br /> Professionals.
        </h1>
        <p className="text-[16px] md:text-[17px] text-center mt-4 text-gray-200">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a <br />
          routine checkup or urgent consultation, book appointments in minutes
          and receive quality care you can trust.
        </p>

        <div className="flex justify-center mt-10">
          <form className="flex flex-col md:flex-row items-center gap-4">
            <input
              className="px-24 py-3 rounded-2xl outline-none border border-gray-400 w-72 md:w-auto"
              type="text"
              placeholder="Search any doctor..."
            />
            <input
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl"
              value="Search Now"
            />
          </form>
        </div>
        <div className="md:flex justify-center gap-10  rounded-2xl m-5">
          <img src="banner-img-1.png" className="rounded-2xl" alt="banner" />
          <img
            src="banner-img-2.jpg"
            className="rounded-2xl mt-4 md:mt-0"
            alt="banner"
          />
        </div>
      </div>
      <div className="  bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] grid gap-6 items-center justify-center sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 bg-gray-200 text-black ">
        {display.map((doctor, index) => (
          <Doctors key={index} data={doctor} />
        ))}
      </div>
      <div className="flex  justify-center items-center bg-gray-200 mb-10">
        <button
          onClick={() => handleShowHide()}
          className="w-[180px] mt-10 mb-10 mx-auto relative inline-block text-lg group"
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">{Show ? "Show Less" : "Show All"}</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
