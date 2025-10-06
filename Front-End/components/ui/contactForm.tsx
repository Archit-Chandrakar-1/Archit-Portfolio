"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
  FaDribbble,
} from "react-icons/fa";



export default function ContactForm() {
  return (
    <div id="contact-form" className="flex flex-col md:flex-row w-full min-h-screen bg-[#fdf8f1] rounded-3xl overflow-hidden shadow-lg">
      {/* Left Section */}
      <div className="md:w-1/2 w-full p-10 md:p-16 flex flex-col justify-center">
        <h1 className="text-6xl font-extrabold text-[#e24b3c]">
          Contact <span className="text-gray-700">us</span>
        </h1>

        <form action="https://formspree.io/f/xkgqbdvq" method="POST">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name*"
              className="border border-gray-300 bg-transparent px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e24b3c]"
              required
            />
            <label>
            <input
              type="email"
              name="email"
              placeholder="Email ID*"
              className="border border-gray-300 bg-transparent px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e24b3c]"
              required
            />
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone number*"
              className="border border-gray-300 bg-transparent px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e24b3c]"
              required
            />
            </label>
          </div>

          <label>
          <textarea
            name="message"
            placeholder="Message*"
            rows={4}
            className="border border-gray-300 bg-transparent px-4 py-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#e24b3c]"
            required
          />
          </label>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            {/* <input
              type="file"
              id="file-upload"
              className="text-sm text-gray-600"
            /> */}
            <button
              type="submit"
              className="bg-[#e24b3c] text-white px-6 py-3 rounded-md hover:bg-[#c53e33] transition"
            >
              Send
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-10 text-sm text-gray-600 flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <span>📮</span> <span>archit1chandrakar@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>📞</span> <span>+91 9171311131</span>
          </div>
          
        </div>
      </div>

      {/* Right Section */}
      <div className="relative md:w-1/2 w-full bg-[#c94c43] flex flex-col justify-center items-center text-white">
        {/* Map and Location */}
        <div className="absolute top-1/3 bg-[#fdf8f1] text-gray-800 p-4 rounded-md shadow-md w-64">
          <h3 className="font-bold text-sm">Archit Chandrakar</h3>
          <p className="text-xs mt-1 leading-4">
            Raipur, Chhattisgarh India
          </p>
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-10 flex flex-col space-y-3 right-8">
          {[FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG, FaDribbble].map(
            (Icon, i) => (
              <div
                key={i}
                className="bg-white p-2 rounded-full text-[#c94c43] cursor-pointer hover:scale-110 transition"
              >
                <Icon size={14} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
