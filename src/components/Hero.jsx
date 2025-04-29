import profilePic from "../assets/img/profile-pic.jpg";
import { useState } from "react";

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="home"
      className="text-center inter grid grid-col-1 lg:grid-cols-2 px-7 py-4"
    >
      <div className="text-left padding flex flex-col justify-center items-center lg:items-start space-y-6">
        <div>
          <h1 className="text-4xl text-center lg:text-left font-bold text-[#2b2b2b] dark:text-[#ffb400]">
            I'm Chilaka Destiny
          </h1>
          <h2 className="text-4xl text-center lg:text-left font-bold text-[#2b2b2b] dark:text-[#ffb400] mt-2">
            <span className="text-[#FFB400] dark:text-[#5c5b97]">
              Front-end
            </span>{" "}
            Developer
          </h2>
        </div>
        <p className="text-gray-600 mt-4 max-w-lg text-[15px]">
          I’m a front-end developer who transforms ideas into seamless,
          pixel-perfect web experiences. With expertise in HTML, CSS,
          JavaScript, React, Vue.js, and TailwindCSS, I craft responsive
          user-friendly interfaces that pop.
          {/* Fueled by a love for clean code and creative problem-solving, I’m here
          to build the web—project by project. Let’s create something awesome
          together! */}
        </p>
        <button
          className="mt-6 bg-[#FFB400] flex items-center gap-3 py-4 px-6 rounded hover:text-xl   hover:scale-105 transform transition-transform duration-300 text-lg text-black hover:text-white"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <span>HIRE ME</span>
          {hovered ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
            //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            //     <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            //   </svg>
          )}
        </button>
      </div>

      <div>
        <img
          src={profilePic}
          alt="Profile Picture"
          className="w-full h-auto hidden lg:block"
        />
      </div>
    </section>
  );
};

export default Hero;
