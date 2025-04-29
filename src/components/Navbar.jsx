// src/components/Navbar.jsx
import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import {
  FaHome,
  FaUser,
  FaServicestack,
  FaEnvelope,
  FaSun,
  FaMoon,
} from "react-icons/fa";
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    };

    document.querySelectorAll(".nav a").forEach((anchor) => {
      anchor.addEventListener("click", handleClick);
    });

    return () => {
      document.querySelectorAll("nav a").forEach((anchor) => {
        anchor.removeEventListener("click", handleClick);
      });
    };
  }, []);

  const links = [
    { href: "#home", label: "Home", icon: FaHome },
    { href: "#about", label: "About", icon: FaUser },
    { href: "#services", label: "Services", icon: FaServicestack },
    { href: "#contact", label: "Contact", icon: FaEnvelope },
  ];

  return (
    <nav className="inter fixed md:right-0 md:top-0 md:h-screen md:w-16 bottom-0  w-full bg-white flex flex-row md:flex-col md:items-center justify-center z-20 gap-10 md:gap-30 p-3">
      <ul className="flex flex-row md:flex-col space-x-[10%] md:space-y-6">
        {links.map((link) => (
          <li key={link.href} className="relative group">
            {/* Icon with Circular Background */}
            <a href={link.href} aria-label={link.label}>
              <div className="w-10 h-10 bg-[#F0F0F6] rounded-full flex items-center justify-center hover:bg-[#ffb400]">
                <link.icon size={20} className="text-gray-700 " />
              </div>
            </a>

            {/* Tooltip (Speech Bubble) */}
            <div
              className="absolute hidden group-hover:block 
                bottom-[50px] left-1/2 -translate-x-1/2 
                bg-gray-800 text-white text-sm px-3 py-1 rounded-md 
                z-50 tooltip"
            >
              {link.label}
            </div>
          </li>
        ))}
        {/* Theme Toggle Button */}
        <li className="relative group">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="w-10 h-10 bg-[#2d3748] dark:bg-white rounded-full flex items-center justify-center"
          >
            {theme === "light" ? (
              <FaMoon className="w-6 h-6 text-[#e2e8f0]" />
            ) : (
              <FaSun className="w-6 h-6 text-[#ffb400]" />
            )}
          </button>
          <div
            className="absolute hidden group-hover:block 
      bottom-[50px] left-1/2 -translate-x-1/2 
      bg-gray-800 text-white text-sm px-3 py-1 rounded-md 
      z-50 tooltip"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
