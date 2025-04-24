import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const Contacts = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-sky-50 to-white text-center relative z-0">
      <h2 className="text-4xl font-extrabold text-blue-800 mb-4 uppercase tracking-wide">
        Get in Touch
      </h2>
      <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
        Have a question about courses, placement assistance, or anything else? Reach out to us
        directly via phone, WhatsApp, or email. We’re here to help!
      </p>

      <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-10 text-left mb-16">
        {/* Phone */}
        <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-400">
          <FaPhoneAlt className="text-blue-700 text-3xl mt-1" />
          <div>
            <h4 className="text-xl font-semibold text-blue-900">Call or SMS</h4>
            <p className="text-gray-700">+91 81061 10504</p>
            <a href="sms:+919876543210" className="text-blue-600 hover:underline">
              Send SMS
            </a>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-400">
          <FaWhatsapp className="text-green-600 text-3xl mt-1" />
          <div>
            <h4 className="text-xl font-semibold text-green-800">WhatsApp</h4>
            <p className="text-gray-700">+91 81061 10504</p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              Start Chat
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-400">
          <FaEnvelope className="text-purple-700 text-3xl mt-1" />
          <div>
            <h4 className="text-xl font-semibold text-purple-800">Email</h4>
            <p className="text-gray-700">niharikams.tcs@gmail.com</p>
            <a
              href="mailto:contact@empoweringitconsultants.com"
              className="text-purple-600 hover:underline"
            >
              Send Email
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg border-t-4 border-gray-400">
          <FaMapMarkerAlt className="text-gray-700 text-3xl mt-1" />
          <div>
            <h4 className="text-xl font-semibold text-gray-800">Location</h4>
            <p className="text-gray-700">BTM Layout, Bangalore, India</p>
            <a
              href="https://maps.app.goo.gl/M1zmiE5AAVwXXUpy7?g_st=iwb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:underline"
            >
              View on Map
            </a>
          </div>
        </div>
      </div>

      {/* Request Call Back Button */}
      <button
        onClick={() => setShowModal(true)}
        className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 px-12 rounded-full text-xl shadow-lg transition-colors duration-300"
      >
        <FaPhoneAlt className="text-2xl" />
        Request a Call Back
      </button>

      {/* Modal Popup */}
      {showModal && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setShowModal(false)}
          ></div>

          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl shadow-lg max-w-md w-full p-8 relative">
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
                aria-label="Close modal"
              >
                &times;
              </button>

              <h3 className="text-2xl font-bold mb-6 text-center text-blue-800">
                Request a Call Back
              </h3>

              {/* FORM TO FORMSPREE */}
              <form
                action="https://formspree.io/f/xdkgoqko"
                method="POST"
                className="space-y-6 text-left"
              >
                <div>
                  <label className="block mb-2 font-semibold text-gray-700" htmlFor="name">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-gray-700" htmlFor="phone">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-gray-700" htmlFor="bestTime">
                    Best Time to Call
                  </label>
                  <input
                    type="text"
                    id="bestTime"
                    name="bestTime"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="E.g., Morning, Afternoon, Evening"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 w-full"
                >
                  Request Call Back
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Contacts;