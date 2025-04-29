// src/components/MainContent.jsx
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Recommendations from "./Recommendations";
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer'

const MainContent = ({isSidebarOpen,toggleSidebar}) => {
  return (
    <main className={`inter md:ml-72 md:mr-16 ml-0  mr-0 flex-1 p-5 overflow-y-auto transition-all duration-300 ${isSidebarOpen ? 'ml-72' : 'ml-0'} mb-[72px] md?mb-0`}>
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />
      {/* Services Section */}
      <Services />
      {/* Recommendations Section */}
      <Recommendations />
      {/* Portfolio Section */}
      <Portfolio />
      {/* Contact Section */}
      <Contact />
      {/* Footer Section */}
      <Footer />
    </main> 
  );
};

export default MainContent;