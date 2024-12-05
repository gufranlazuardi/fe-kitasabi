"use client";

import { CardSampleDisasterPage } from "@/components/CardSampleDisasterPage";
import Faq from "@/components/Faq";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import OurPrograms from "./our-programs/page";

const Home = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const images = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpeg",
    "/image5.jpg",
  ];

  return (
    <div className="flex flex-col gap-[4rem] items-center justify-center">
      <div className="max-w-screen-xl w-full px-[2rem] py-[4rem] mx-auto">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="w-full">
                    <CardContent className="flex h-[20rem] w-full p-0 rounded-lg items-center justify-center overflow-hidden">
                      <Image
                        src={src}
                        alt={`carousel-image-${index + 1}`}
                        width={1400}
                        height={400}
                        className="rounded-lg object-center"
                        layout="responsive"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="max-w-screen-xl w-full px-[2rem] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-[2rem]">
          <div className="max-w-[15rem]">
            <h2 className="text-[40px]">Lets create more impact</h2>
          </div>
          <hr className="border-r-2 border-gray-300 h-[120px]" />
          <div className="max-w-[25rem]">
            <h3>
              You become a hero for much people in the world with your
              donation, lets make world more beautiful! Set aside your
              money to make the world beautiful.
            </h3>
          </div>
        </div>

        <Button className="px-[3rem] py-[1.5rem] text-lg rounded-lg bg-sky-500 hover:bg-[#1b609c] font-semibold">
          Start donating
        </Button>
      </div>

      <div className="max-w-screen-xl w-full px-[2rem] mx-auto">
        <CardSampleDisasterPage />
      </div>
      <OurPrograms />

      <Faq />
    </div>
  );
};

export default Home;
