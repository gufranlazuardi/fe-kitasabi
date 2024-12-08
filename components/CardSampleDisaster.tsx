import Image from "next/image";
import React from "react";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";

interface CardSampleDisasterProps {
  user_id: string | number;
  name: string;
  short_description: string;
  image_url: string;
  goal_amount: number;
  current_amount: number;
  slug: string;
  long_description: string;
}

const CardSampleDisaster: React.FC<CardSampleDisasterProps> = ({
  user_id,
  name,
  short_description,
  image_url,
  goal_amount,
  current_amount,
  slug,
  long_description,
}) => {
  return (
    <>
      <div className="flex flex-col w-full sm:w-[20rem] md:w-[12rem] lg:w-[15rem] xl:w-[20rem] mx-auto rounded-xl border-2 border-blue-400 dark:border-white h-full pb-2">
        <Image
          src={image_url}
          alt={name}
          width={1920}
          height={1080}
          layout="responsive"
          className="rounded-t-xl"
        />
        <div className="flex flex-col px-4 py-2 gap-5">
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-700">
              {name}
            </h3>
            <h2>{short_description}</h2>
          </div>
          <p>{long_description || "long description"}</p>
          <Progress value={50} />
          <div className="flex flex-col gap-1 justify-between text-sm text-gray-600">
            <p className="font-bold text-xl text-sky-500">
              {current_amount}
            </p>
            <p className="text-black">
              Terkumpul dari{" "}
              <span className="font-bold">{goal_amount}</span>
            </p>
          </div>
          <Button className="bg-sky-500 hover:bg-sky-800">
            Go to detail
          </Button>
        </div>
      </div>
    </>
  );
};

export default CardSampleDisaster;
