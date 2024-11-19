import { CardSampleDisasterPage } from '@/components/CardSampleDisasterPage'
import Faq from '@/components/Faq'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col gap-[4rem] items-center justify-center max-w-screen-xl px-[2rem] py-[4rem] mx-auto'>
      {/* Image Container */}
      <div className='w-full relative'>
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
          <Button className='bg-sky-400 py-2' size={'lg'}>
            <h1 className='text-lg font-bold text-white'>Lets Fund!</h1>
          </Button>
        </div>
      </div>

      <CardSampleDisasterPage />

      <Faq />
    </div>
  )
}

export default Home
