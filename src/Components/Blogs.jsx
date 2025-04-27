import React from "react";
import { BiCalendar, BiRightArrow } from "react-icons/bi";
import { useLoaderData } from "react-router";

const Blogs = () => {
  const Data = useLoaderData();
  console.log(Data);
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]  py-10 px-4 md:px-12">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-white mb-10">
        React Interview Questions
      </h1>
      <div className="grid gap-6 max-w-4xl mx-auto">
        {Data.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
              {blog.question}
            </h2>
            <p className="text-gray-700 leading-relaxed flex gap-3">
              <BiRightArrow className="text-black fill-black" size={40} />{" "}
              {blog.answer}
            </p>
            <div>
              <p className="text-sm text-gray-400 mt-4 text-right flex justify-end font-bold">
                <BiCalendar className="text-blue-500" size={20} /> Added on:{" "}
                {blog.addedAt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
