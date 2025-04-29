// src/components/Portfolio.jsx
import Ecommerce from "../assets/img/exclusive-ecommerce.png";
import foodRuiners from "../assets/img/food-ruiners.png";
import inkCartridges from "../assets/img/ink-cartridges.png";
import modeva from "../assets/img/modeva.png";
import techFest from "../assets/img/tech-fest.png";
import careos from "../assets/img/careos.png";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "This is an ecommerce store built with Fakeapi, Dummy api, Tailwind CSS and Vue.js.",
      technologies: "Vue.Js, Tailwind CSS",
      link: "https://exclusive-ecommerce-taupe.vercel.app/",
      image: Ecommerce,
    },
    {
      title: "Lead Capture Form",
      description:
        "This is a test project made using HTML and CSS utilizing Tailwindcss.",
      technologies: "HTML, Tailwindcss",
      link: "https://recycle-ink-cartridge.vercel.app/",
      image: inkCartridges,
    },
    {
      title: "Careos",
      description:
        "Careos is a car display/sales website. It is a beautiful Figma design template I recreated. You will find it interesting, I hope to expand this website in the nearest future.",
      technologies: "HTML, Bootstrap",
      link: "https://careos.netlify.app/",
      image: careos,
    },
    {
      title: "Fashion Store Website",
      description:
        "This is a fashion store website built with HTML, CSS, utilizing Bootstrap.",
      technologies: "HTML, Bootstrap",
      link: "https://modeva-fashio-enterprice.netlify.app/",
      image: modeva,
    },
    {
      title: "Food Ruiners",
      description:
        "This is a test project build using HTML and CSS utilizing Tailwindcss",
      technologies: "HTML, Tailwindcss",
      link: "https://food-ruiners.vercel.app/",
      image: foodRuiners,
    },
    {
      title: "Tech Fest",
      description:
        "This is an event-booking single page application built using React.js and Tailwindcss. Here, you can book tickets, upload a profile picture and download your booked ticket along with your profile picture too.",
      technologies: "HTML, Tailwindcss, React.Js",
      link: "https://techember-fest.vercel.app/",
      image: techFest,
    },
  ];

  return (
    <section id="portfolio" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-center text-gray-900">
          Portfolio
        </h3>
        <p className="text-gray-600 text-center mt-2 max-w-2xl mx-auto">
          A selection of my projects showcasing my Skill in web
          development and copywriting.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-50 hover:shadow-white hover:shadow-lg dark:hover:shadow-none "
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold bg-gray-800 bg-opacity-75 px-4 py-4  block w-full text-center ">
                  {project.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
