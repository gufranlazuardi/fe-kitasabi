import Image from "next/image";
import React from "react";

const OurPrograms = () => {
  return (
    <div className="w-full flex flex-col bg-[rgb(165,231,255)] py-[4rem]">
      <div className="max-w-4xl w-full mx-auto px-4">
        <h1 className="font-bold text-sky-500 text-3xl text-center mb-6">
          Our Programs
        </h1>
        <p className="text-gray-700 text-center text-lg mb-6">
          Dedicated to providing impactful support to
          disaster-affected communities, our programs focus on
          immediate relief, long-term rebuilding, and empowering
          futures.
        </p>
        <h2>{/* add this */}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[4rem] gap-4">
          {/* Card 1 */}
          <div className="bg-white rounded-tr-[2rem] px-4 py-8 shadow-xl shadow-sky-500">
            <div className="flex justify-center">
              <Image
                src="/our-programs1.png"
                alt="Emergency Relief"
                width={500}
                height={500}
                className="w-[6rem] h-auto"
              />
            </div>
            <h2 className="text-lg font-bold text-sky-600 mt-[3rem]">
              Emergency Relief
            </h2>
            <p className="text-gray-600 mt-[1rem] text-sm">
              Providing immediate aid, including food, water, and
              medical care, to disaster-affected regions.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-tr-[2rem] px-4 py-8 shadow-lg shadow-sky-500">
            <div className="flex justify-center">
              <Image
                src="/our-programs2.png"
                alt="Rebuilding Communities"
                width={500}
                height={500}
                className="w-[6rem] h-auto"
              />
            </div>
            <h2 className="text-lg font-bold text-sky-600 mt-[3rem]">
              Rebuilding Communities
            </h2>
            <p className="text-gray-600 mt-[1rem] text-sm">
              Helping rebuild homes, schools, and essential
              infrastructure to restore normalcy after disasters.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-tr-[2rem] px-4 py-8 shadow-lg shadow-sky-500">
            <div className="flex justify-center">
              <Image
                src="/our-programs3.png"
                alt="Educational Support"
                width={500}
                height={500}
                className="w-[6rem] h-auto"
              />
            </div>
            <h2 className="text-lg font-bold text-sky-600 mt-[3rem]">
              Educational Support
            </h2>
            <p className="text-gray-600 mt-[1rem] text-sm">
              Offering educational resources and scholarships for
              children affected by disasters to ensure their future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPrograms;
