import React from "react";
import CardSampleDisaster from "./CardSampleDisaster";

export const CardSampleDisasterPage = () => {
  return (
    <div className="flex flex-col w-full gap-[4rem] mt-[4rem]">
      <div className="flex justify-center">
        <h1 className="text-center text-[35px] font-bold w-[45rem]">
          Recent campaign open that waiting for your{" "}
          <span className="text-sky-500">kindness</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full">
        {"123".split("").map((index) => (
          <CardSampleDisaster key={index} />
        ))}
      </div>
    </div>
  );
};
