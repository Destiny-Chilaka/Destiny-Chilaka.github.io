// src/components/Contact.jsx
import { useState } from "react";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init({
      publicKey: "hxhvz6vbzjrqhlSeT", // Replace with your EmailJS User ID (public key)
      limitRate: {
        throttle: 1000, // Enforce 1 request per second (1000ms)
      },
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_0mt19bv", // Replace with your EmailJS Service ID
        "template_lhniw9m", // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "No Subject",
          message: formData.message || "No Message",
        }
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Thank you for your message! I’ll get back to you soon.");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Oops! Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="">
      <div className="max-w-7xl mx-auto px-3 py-8 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-center text-gray-900">
          Contact Me
        </h3>
        <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
          Let’s work together! Fill out the form below to get in touch.
        </p>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Contact Form */}

          <div>
            <h4 className="text-2xl font-semibold text-gray-900 mb-4">
              Leave Us Your Info
            </h4>
            <div className="bg-white p-6 ">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-[#e2e8f0]"
                  >
                    Your Full Name (Required)
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-3 bg-gray-100 focus:outline-1 focus:outline-blue-500  dark:text-black/60"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-[#e2e8f0]"
                  >
                    Your Email (Required)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-3 bg-gray-100 focus:outline-1 focus:outline-blue-500  dark:text-black/60"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-[#e2e8f0]"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full p-3 bg-gray-100 focus:outline-1 focus:outline-blue-500  dark:text-black/60"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-[#e2e8f0]"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="mt-1 block w-full p-3 bg-gray-100 focus:outline-1 focus:outline-blue-500  dark:text-black/60"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-black py-3 px-4  hover:bg-blue-400 transition-colors cursor-pointer "
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Contact Information */}
          <div className="grid place-items-center md:block">
            <h4 className="text-2xl font-semibold text-gray-90 md:mb-4">
              Contact Information
            </h4>
            <div className="space-y-4">
              <div className=" max-w-[250px]  sm:max-w-xs bg-white p-3 sm:p-5 shadow-2xl">
                <div className=" flex justify-center items-center mb-5">
                  <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <FaMapMarkerAlt className="w-6 h-6 text-[#fff]" />
                  </div>
                </div>
                <div className="flex items-center text-[#7b7b7b] dark:text-[#e2e8f0] justify-between mb-2">
                  <p className="font-medium sm:font-semibold text-lg">Country:</p>
                  <p className="text-[13px] sm:text-base break-all">Nigeria</p>
                </div>
                <div className="flex items-center text-[#7b7b7b] dark:text-[#e2e8f0] justify-between">
                  <p className="font-medium sm:font-semibold text-lg">City:</p>
                  <p className="text-[13px] sm:text-base break-all">
                    Uyo, AkwaIbom
                  </p>
                </div>
              </div>
              <div className=" max-w-[250px] sm:max-w-xs bg-white p-3  sm:p-5 shadow-2xl">
                <div className=" flex justify-center items-center mb-5">
                  <div className="w-9 h-9 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <FaEnvelope className="w-6 h-6 text-[#fff]" />
                  </div>
                </div>
                <div className="flex items-center text-[#7b7b7b] dark:text-[#e2e8f0] justify-between mb-2">
                  <p className="font-medium sm:font-semibold text-lg">Email:</p>
                  <p className="text-[13px] sm:text-base break-all">
                    dichilaka@gmail.com
                  </p>
                </div>
                <div className="flex items-center text-[#7b7b7b] dark:text-[#e2e8f0] justify-between mb-2">
                  <p className="font-medium sm:font-semibold text-lg ">Twitter:</p>
                  <p className="text-[13px] sm:text-base break-all">
                    @Destiny_Chilaka
                  </p>
                </div>
                <div className="flex items-center text-[#7b7b7b] dark:text-[#e2e8f0] justify-between gap-2 mb-2">
                  <p className="font-medium sm:font-semibold text-lg">Telegram:</p>
                  <p className="text-blue-400 text-[13px] sm:text-base break-all">
                    <a href="https://t.me/Chilaka_Destiny">
                       Destiny_Chilaka
                    </a>
                  </p>
                </div>
                <div className="flex items-center text-[#7b7b7b] dark:text-[#e2e8f0] justify-between gap-2 ">
                  <p className="font-medium sm:font-semibold ">WhatsApp:</p>
                  <p className="text-[13px] sm:text-base break-all">
                    {" "}
                    +234 813 973 2276
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
