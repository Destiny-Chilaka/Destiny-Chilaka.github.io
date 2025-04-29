// src/components/Services.jsx
import { FaCode, FaPencilRuler, FaBullhorn } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services" className="py-16">
      <h3 className="text-2xl font-semibold text-center">My Services</h3>
      <p className="text-gray-600 text-[15px] sm:text-base text-center mt-2 max-w-[300px] sm:max-w-2xl mx-auto">
        Offering tailored solutions to elevate your brand. From building
        responsive websites and crafting compelling copy to creating impactful
        advertising campaigns.
      </p>
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        <div className="bg-white  p-6 text-center w-64">
          <FaCode size={48} className="text-[#ffb400] mx-auto" />
          <h4 className="mt-4 font-semibold">Web Development</h4>
          <p className="text-gray-600 mt-2">Blog, E-Commerce</p>
        </div>
        <div className="bg-white  p-6 text-center w-64">
          <FaPencilRuler size={48} className="text-green-500 mx-auto" />
          <h4 className="mt-4 font-semibold">CopyWriting</h4>
          <p className="text-gray-600 mt-2">Website Content, Marketing Copy</p>
        </div>
        <div className="bg-white  p-6 text-center w-64">
          <FaBullhorn size={48} className="text-purple-500 mx-auto" />
          <h4 className="mt-4 font-semibold">Advertising</h4>
          <p className="text-gray-600 mt-2">Campaigns, Social Media Ads</p>
        </div>
      </div>
    </section>
  );
};

export default Services;