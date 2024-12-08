import React from "react";

const About = () => {
  return (
    <div className="flex flex-col max-w-screen-lg mx-auto mt-8 px-4">
      <h1 className="text-center font-bold text-3xl text-sky-500 mb-4">
        About Us
      </h1>
      <p className="text-center text-gray-600 leading-7 mb-10">
        We are dedicated to providing critical assistance and
        fostering hope for communities in need. Our team works
        tirelessly to respond to disasters, rebuild lives, and empower
        futures.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Section 1 */}
        <div className="text-center">
          <div className="bg-sky-100 p-6 rounded-full mx-auto w-20 h-20 flex items-center justify-center mb-4">
            <span
              role="img"
              aria-label="team"
              className="text-sky-500 text-3xl"
            >
              🌍
            </span>
          </div>
          <h3 className="font-bold text-lg text-sky-600">
            Who We Are
          </h3>
          <p className="text-gray-500 mt-2 text-sm">
            A team of passionate individuals committed to making a
            difference where it matters most.
          </p>
        </div>
        {/* Section 2 */}
        <div className="text-center">
          <div className="bg-sky-100 p-6 rounded-full mx-auto w-20 h-20 flex items-center justify-center mb-4">
            <span
              role="img"
              aria-label="mission"
              className="text-sky-500 text-3xl"
            >
              🛠️
            </span>
          </div>
          <h3 className="font-bold text-lg text-sky-600">
            What We Do
          </h3>
          <p className="text-gray-500 mt-2 text-sm">
            Deliver emergency relief, rebuild infrastructure, and
            provide educational resources.
          </p>
        </div>
        {/* Section 3 */}
        <div className="text-center">
          <div className="bg-sky-100 p-6 rounded-full mx-auto w-20 h-20 flex items-center justify-center mb-4">
            <span
              role="img"
              aria-label="vision"
              className="text-sky-500 text-3xl"
            >
              ✨
            </span>
          </div>
          <h3 className="font-bold text-lg text-sky-600">
            Why We Do It
          </h3>
          <p className="text-gray-500 mt-2 text-sm">
            To restore hope and bring lasting change to those affected
            by natural disasters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
