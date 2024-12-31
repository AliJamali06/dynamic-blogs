import React from "react";
import Image from "next/image";

const Contactus = () => {
  return (
    <div>
      <div className="font-[sans-serif]">
        <div className="bg-gradient-to-r from-blue-700 to-blue-300 w-full h-60">
          <Image
            src="/image.10.jpg" // Public folder ke andar hone par relative path
            alt="Banner Image"
            layout="fill" // Image container ke size ke hisaab se fit kare
            objectFit="cover" // Object-fit property ko maintain kare
          />
        </div>
        <div className="-mt-28 mb-6 px-4">
          <div className="mx-auto max-w-6xl shadow-lg p-8 relative bg-white rounded-md">
            <h2 className="text-xl text-gray-800 font-bold">Contact us</h2>
            <form className="mt-8 grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-800 text-sm block mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm block mb-2">Your Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm block mb-2">Your Number</label>
                <input
                  type="text"
                  placeholder="Phone No."
                  className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm block mb-2">Website</label>
                <input
                  type="text"
                  placeholder="Website"
                  className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm block mb-2">Company</label>
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm block mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]"
                />
              </div>
              <div className="col-span-full">
                <label className="text-gray-800 text-sm block mb-2">Message</label>
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full rounded-md px-4 border border-gray-300 text-sm pt-3 outline-[#007bff]"
                  defaultValue={""}
                />
              </div>
              <div className="flex items-center col-span-full">
                <input
                  id="checkbox1"
                  type="checkbox"
                  className="w-4 h-4 mr-3 shrink-0"
                />
                <label htmlFor="checkbox1" className="text-sm text-gray-500">
                  I agree to the
                  <span className="underline cursor-pointer text-blue-500"> Terms and Conditions </span>
                  and
                  <span className="underline cursor-pointer text-blue-500"> Privacy Policy </span>
                </label>
              </div>
              <button
                type="button"
                className="text-white w-max bg-blue-600 hover:bg-blue-700 tracking-wide rounded-md text-sm px-6 py-3 mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
