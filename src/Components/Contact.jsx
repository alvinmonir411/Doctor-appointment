import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-2xl">
        {/* Left Panel */}
        <div className="flex flex-col justify-center text-white space-y-6">
          <h2 className="text-4xl font-bold">Let's Talk!</h2>
          <p className="text-gray-300 text-lg">
            Want to build something together? Drop me a message and I'll get
            back to you.
          </p>
          <div className="space-y-4 text-base">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-teal-300 text-xl" />
              <span>+8801XXXXXXXXX</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-pink-400 text-xl" />
              <span>your@email.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-yellow-300 text-xl" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Right Panel: Contact Form */}
        <form className="space-y-6 text-white">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
