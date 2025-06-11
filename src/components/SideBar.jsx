import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import extraSkillIcon from "../assets/img/extra-skill-icon.png";
import profilePic from "../assets/img/profile-pic.jpg";
import "../App.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Hamburger Button (Visible on Mobile) */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 py-3 px-5 bg-[#fff] text-black dark:text-white rounded text-xl dark:bg-[#262d3a]"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Sidebar */}
      <aside
        className={`sidebar inter fixed left-0 top-0 h-screen w-72 bg-white p-5 overflow-y-auto transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:fixed md:w-72 md:h-screen`}
      >
        {/* Profile Section */}
        <div className="text-center">
          <div
            className="w-48 h-48 rounded-full bg-cover bg-top mx-auto
          "
            style={{ backgroundImage: `url(${profilePic})` }}
          ></div>
          <h2 className="text-lg font-semibold text-[#2b2b2b] dark:text-[#e2e8f0]">
            Chilaka Destiny
          </h2>
          <p className="text-gray-600">Front-end Developer</p>
          <div className="flex justify-center space-x-3 mt-3">
            <a
              href="https://web.facebook.com/destiny.chilaka.125/"
              className="w-8 h-8 bg-[#FFB400] rounded-full flex items-center justify-center hover:bg-orange-300 transition-colors"
            >
              <FaFacebook size={16} className="text-[#2b2b2b]" />
            </a>
            <a
              href="https://x.com/Destiny_Chilaka"
              className="w-8 h-8 bg-[#FFB400] rounded-full flex items-center justify-center hover:bg-orange-300 transition-colors"
            >
              <i class="fa-brands fa-square-x-twitter text-[#2b2b2b]"></i>
            </a>
            <a
              href="in/destiny-chilaka-4ab30725b"
              className="w-8 h-8 bg-[#FFB400] rounded-full flex items-center justify-center hover:bg-orange-300 transition-colors"
            >
              <FaLinkedin size={16} className="text-[#2b2b2b]" />
            </a>
            <a
              href="https://github.com/Destiny-Chilaka"
              className="w-8 h-8 bg-[#FFB400] rounded-full flex items-center justify-center hover:bg-orange-300 transition-colors"
            >
              <FaGithub size={16} className="text-[#2b2b2b]" />
            </a>
          </div>
        </div>
        <div className="h-[2px] bg-[#F0F0F6] dark:bg-[#3c4553] w-full my-6"></div>

        {/* Details Section */}
        <div className="my-6 text-[#767676] dark:text-[#e2e8f0]">
          <p>
            <span className="font-semibold">Age:</span> 20
          </p>
          <p>
            <span className="font-semibold">Residence:</span> Nigeria
          </p>
          <p>
            <span className="font-semibold">Freelance:</span>{" "}
            <span className="text-green-600 rounded-2xl">
              Available
            </span>
          </p>
          <span className="font-semibold">Address:</span> Uyo, AkwaIbom
        </div>

        <div className="h-[2px] bg-[#F0F0F6] dark:bg-[#3c4553]  w-full my-6"></div>

        {/* Languages Section */}
        <div className="my-6">
          <h3 className="text-lg font-semibold">Languages</h3>

          <div className="flex justify-between items-center mt-2 text-[#767676]">
            <p className="my-2 text-[14px]">English</p>
            <p className="my-2 text-[14px]">80%</p>
          </div>
          <div
            className="w-full flex items-center outline-2 outline-[#FFB400] h-1 rounded"
            style={{ outline: "1px solid #FFB400", outlineOffset: "1px" }}
          >
            <div
              className="bg-[#FFB400] h-[2px] rounded "
              style={{ width: "90%" }}
            ></div>
          </div>

          <div className="flex justify-between items-center mt-2 text-[#767676]">
            <p className="my-2 text-[14px]">Igbo</p>
            <p className="my-2 text-[14px]">60%</p>
          </div>
          <div
            className="w-full flex items-center outline-2 outline-[#FFB400]  h-1 rounded"
            style={{ outline: "1px solid #FFB400", outlineOffset: "1px" }}
          >
            <div
              className="bg-[#FFB400] h-[2px] rounded "
              style={{ width: "60%" }}
            ></div>
          </div>

          <div className="flex justify-between items-center mt-2 text-[#767676]">
            <p className="my-2 text-[14px]">Others</p>
            <p className="my-2 text-[14px]">40%</p>
          </div>
          <div
            className="w-full flex items-center outline-2 outline-[#FFB400]  h-1 rounded"
            style={{ outline: "1px solid #FFB400", outlineOffset: "1px" }}
          >
            <div
              className="bg-[#FFB400] h-[2px] rounded "
              style={{ width: "40%" }}
            ></div>
          </div>
        </div>

        <div className="h-[2px] bg-[#F0F0F6] dark:bg-[#3c4553]  w-full my-6"></div>

        {/* Skills Section */}
        <div className="my-6">
          <h3 className="text-lg font-semibold">Skills</h3>

          <div className="flex justify-between items-center mt-2 text-[#767676]">
            <p className="my-2 text-[14px]">HTML</p>
            <p className="my-2 text-[14px]">90%</p>
          </div>
          <div
            className="w-full flex items-center outline-2 outline-[#FFB400]  h-1 rounded"
            style={{ outline: "1px solid #FFB400", outlineOffset: "1px" }}
          >
            <div
              className="bg-[#FFB400] h-[2px] rounded "
              style={{ width: "90%" }}
            ></div>
          </div>

          <div className="flex justify-between items-center mt-2 text-[#767676]">
            <p className="my-2 text-[14px]">CSS</p>
            <p className="my-2 text-[14px]">80%</p>
          </div>
          <div
            className="w-full flex items-center outline-2 outline-[#FFB400]  h-1 rounded"
            style={{ outline: "1px solid #FFB400", outlineOffset: "1px" }}
          >
            <div
              className="bg-[#FFB400] h-[2px] rounded "
              style={{ width: "80%" }}
            ></div>
          </div>

          <div className="flex justify-between items-center mt-2 text-[#767676]">
            <p className="my-2 text-[14px]">JS</p>
            <p className="my-2 text-[14px]">65%</p>
          </div>
          <div
            className="w-full flex items-center outline-2 outline-[#FFB400]  h-1 rounded"
            style={{ outline: "1px solid #FFB400", outlineOffset: "1px" }}
          >
            <div
              className="bg-[#FFB400] h-[2px] rounded "
              style={{ width: "65%" }}
            ></div>
          </div>

          <div className="flex justify-between items-center mt-2 text-[#767676]">
            <p className="my-2 text-[14px]">TailwindCSS</p>
            <p className="my-2 text-[14px]">75%</p>
          </div>
          <div
            className="w-full flex items-center outline-2 outline-[#FFB400]  h-1 rounded"
            style={{ outline: "1px solid #FFB400", outlineOffset: "1px" }}
          >
            <div
              className="bg-[#FFB400] h-[2px] rounded "
              style={{ width: "60%" }}
            ></div>
          </div>

          <div className="flex justify-between items-center mt-2 text-[#767676]">
            <p className="my-2 text-[14px]">Vue.JS</p>
            <p className="my-2 text-[14px]">70%</p>
          </div>
          <div
            className="w-full flex items-center outline-2 outline-[#FFB400]  h-1 rounded"
            style={{ outline: "1px solid #FFB400", outlineOffset: "1px" }}
          >
            <div
              className="bg-[#FFB400] h-[2px] rounded "
              style={{ width: "70%" }}
            ></div>
          </div>

          <div className="flex justify-between items-center mt-2 text-[#767676]">
            <p className="my-2 text-[14px]">React.JS</p>
            <p className="my-2 text-[14px]">70%</p>
          </div>
          <div
            className="w-full flex items-center outline-2 outline-[#FFB400]  h-1 rounded"
            style={{ outline: "1px solid #FFB400", outlineOffset: "1px" }}
          >
            <div
              className="bg-[#FFB400] h-[2px] rounded "
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>

        <div className="h-[2px] bg-[#F0F0F6] dark:bg-[#3c4553]  w-full my-6"></div>

        {/* Extra Skills */}
        <div className="my-6">
          <h3 className="text-lg font-semibold">Extra Skills</h3>
          <div className=" my-3 text-[#767676]">
            <p className="my-2 flex justify-start gap-3 items-center text-lg">
              <span>
                <img className="" src={extraSkillIcon} alt="" />
              </span>
              Bootstrap
            </p>
            <p className="my-2 flex justify-start gap-3 items-center text-lg">
              <span>
                <img className="" src={extraSkillIcon} alt="" />
              </span>
              Git Knowledge
            </p>
          </div>
        </div>
        <div className="flex justify-center my-4 w-full">
          <a
            href="/public/cv.pdf"
            download="Destiny Chilaka- Frontend Developer"
            className="bg-[#FFB400] text-[#2b2b2b] px-6 py-2 rounded font-semibold shadow hover:bg-orange-300 transition-colors"
          >
            Download CV
          </a>
        </div>
      </aside>

      {/* Overlay for Mobile (when sidebar is open) */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black opacity-75 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
