// src/components/Recommendations.jsx
import Jackson from "../assets/img/Richard-Jackson.jpg"; // Placeholder for James Gouse

const Recommendations = ({ testimonials = [] }) => {
  // Default testimonials if none are provided via props
  const defaultTestimonials = [
    {
      quote: "Wonderful Work!",
      text: "Chilaka is a great developer. He's someone everyone should have on their team. He is dedicated, pays attention to details and gives an excellent work. It's been amazing working with him.",
      name: "Richard Jackson",
      role: "Frontend Developer",
      avatar: Jackson,
    },
  ];

  const data = testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section id="recommendations" className="py-16 bg-[#e5e5e5] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading and Description */}
        <h3 className="text-3xl font-bold text-center text-gray-900">
          Recommendations
        </h3>
        <p className="text-gray-600 text-center text-[15px] sm:text-base mt-2 max-w-2xl mx-auto">
          Trusted by clients across industries. Here’s what they have to say
          about my work in web development, copywriting, and advertising.
        </p>

        {/* Testimonial Cards */}
        <div className="flex justify-center items-center  mt-8">
          {data.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 text-center w-full rounded-lg shadow-md max-w-xl"
            >
              {/* Star Rating */}
              <div className="flex justify-center items-center mb-4">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#ffb400]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.539 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.314 9.397c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <h4 className="text-lg font-semibold text-gray-900">
                {testimonial.quote}
              </h4>

              {/* Testimonial Text */}
              <p className="text-gray-600 mt-2">{testimonial.text}</p>

              {/* Avatar, Name, and Role */}
              <div className="mt-4 flex justify-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <p className="mt-2 font-medium text-gray-900">
                {testimonial.name}
              </p>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>
          ))}
        </div>

        {/* Dots (Static for now, can be extended to a carousel) */}
        <div className="flex justify-center mt-6 space-x-2">
          {data.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === 0 ? "bg-[#ffb400]" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
