// src/components/About.jsx
const About = () => {
  return (
    <section id="about" className="py-10 my-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <h3 className="text-3xl font-bold text-center text-gray-900">
          About Me
        </h3>
        <div className="text-gray-600 text-left text-[15px] sm:text-[18px] sm:text-center mt-4 max-w-2xl mx-auto space-y-4">
          <p>
            I’m Chilaka Destiny, a passionate Front-end Developer with over 3
            years of experience. I specialize in web development and
            copywriting, creating responsive websites and engaging content that
            connect with audiences.
          </p>
          <p>
            Based in Uyo, Akwa Ibom, Nigeria, I’m ready to collaborate on
            projects that make an impact. I combine technical expertise with
            creativity to deliver solutions that are both functional and
            captivating.
          </p>
        </div>

        {/* Work Experience Subsection */}
        <div className="text-gray-600 mt-8 max-w-2xl mx-auto">
          <h4 className="text-xl font-semibold text-center text-gray-900">
            Work Experience
          </h4>
          <div className="mt-4 space-y-4">
            <div>
              <p className="font-semibold text-gray-800 dark:text-[#e2e8f0] mb-1">
                Junior Front-end Developer at Acceleratez Ventures
              </p>
              <p className="text-sm">
                <span className="bg-orange-400 dark:bg-[#ffb400] text-white px-2 py-1 rounded">
                  February 2025 – Present
                </span>
              </p>
              <p className="mt-1">
                Currently contributing to the development of responsive web
                applications, focusing on creating seamless user experiences
                with React and Tailwind CSS.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 dark:text-[#e2e8f0] mb-1">
                Front-end Developer at CTSC (Cracking The Style Code)
              </p>
              <p className="text-sm">
                <span className="bg-orange-400 dark:bg-[#ffb400] text-white px-2 py-1 rounded">
                  April 2024 – May 2024
                </span>
              </p>
              <p className="mt-1">
                Developed and maintained web pages for a fashion-focused
                platform, enhancing user engagement through modern design and
                functionality.
              </p>
            </div>
          </div>
        </div>

        {/* Education Subsection */}
        <div className="text-gray-600 mt-8 max-w-2xl mx-auto border-t pt-6">
          <h4 className="text-xl font-semibold text-center text-gray-900">
            Education
          </h4>
          <div className="mt-4">
            <p className="font-semibold text-gray-800 dark:text-[#e2e8f0] mb-1">
              Bachelor of Computer Engineering, University of Uyo, Akwa Ibom,
              Nigeria
            </p>
            <p className="text-sm">
              <span className="bg-orange-400 dark:bg-[#ffb400]  text-white px-2 py-1 rounded">
                2021 – 2026 (Expected)
              </span>
            </p>
            <p className="mt-1">
              Currently pursuing a degree in Computer Engineering, gaining a
              strong foundation in programming, software development, and
              problem-solving.
            </p>
          </div>
        </div>

        {/* Personal Touch and CTA */}
        <div className="text-gray-600 text-center mt-8 max-w-2xl mx-auto space-y-4 border-t pt-6">
          <p>
            When I’m not coding, I’m reading, playing chess, or spending time
            with God. Ready to bring your ideas to life? Let’s connect and
            create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
