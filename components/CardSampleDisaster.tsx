import Image from "next/image";
import React from "react";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";

const CardSampleDisaster = () => {
  return (
    <div className="flex flex-col w-full sm:w-[20rem] md:w-[12rem] lg:w-[18rem] xl:w-[22rem] mx-auto rounded-xl border-2 border-blue-400 dark:border-white h-full pb-2">
      <Image
        src="/disaster.jpg"
        alt="Disaster Image"
        width={1920}
        height={1080}
        layout="responsive"
        className="rounded-t-xl"
      />
      <div className="flex flex-col px-4 py-2 gap-5">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-700">
            Banjir bandang
          </h3>
          <h2>Bandung, Indonesia</h2>
        </div>
        <p>BandungBandungBandungBandung</p>
        <Progress value={50} />
        <div className="flex flex-col gap-1 justify-between text-sm text-gray-600">
          <p className="font-bold text-xl text-sky-500">70.000.000</p>
          <p className="text-black">
            Terkumpul dari{" "}
            <span className="font-bold">100.000.000</span>
          </p>
        </div>
        <Button className="bg-sky-500 hover:bg-sky-800">
          Go to detail
        </Button>
      </div>
    </div>
  );
};

export default CardSampleDisaster;
