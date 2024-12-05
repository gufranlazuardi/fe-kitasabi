"use client"

import { CardSampleDisasterPage } from '@/components/CardSampleDisasterPage'
import Faq from '@/components/Faq'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const Home = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const images = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
    "/image5.jpg",
  ];

  return (
    <div className='flex flex-col gap-[4rem] items-center justify-center max-w-screen-xl px-[2rem] py-[4rem] mx-auto'>
      {/* Image Container */}
      {/* <div className='w-full relative'>
        <div className='absolute inset-0 bg-gradient-to-b from-black to-gray-500 opacity-50 rounded-2xl'></div>
        <Image
          src="/disaster.jpg"
          alt="Disaster Image"
          width={1920}
          height={1080}
          layout="responsive"
          className="object-cover rounded-2xl shadow-xl"
        />

          
        <div className='mt-8 absolute text-right bottom-10 right-10'>
          <Button className='bg-sky-400 py-6' size={'lg'}>
            <h1 className='text-lg font-bold text-white'>Lets Fund!</h1>
          </Button>
        </div>
      </div> */}

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
                    width={1400}  // Adjust width as needed
                    height={400} // Adjust height as needed
                    className="rounded-lg object-center" // You can add additional styles here if needed
                    layout="responsive" // Keeps the aspect ratio intact
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

    <div className='flex w-full items-center justify-between'>
      <div className='flex items-center gap-[2rem]'>
        <div className='max-w-[15rem] '>
          <h2 className='text-[40px]'>
            Lets create more impact
          </h2>
        </div>
        <hr className='border-r-2 border-black h-[150px]' />
        <div className='max-w-[25rem] '>
          <h3>
            You become a hero for much people in the world with your donation, let’s make world more beutiful!
            set aside your money to make the world beautiful
          </h3>
        </div>
      </div>
       
        <Button className='px-[4rem] py-[1.5rem] rounded-lg bg-sky-500 hover:bg-[#1b609c]'>
          Start donating
        </Button>
    </div>

      <CardSampleDisasterPage />

      <Faq />
    </div>
  )
}

export default Home
