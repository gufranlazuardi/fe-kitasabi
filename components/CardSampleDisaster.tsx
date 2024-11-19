import Image from 'next/image'
import React from 'react'
import { Progress } from './ui/progress'

const CardSampleDisaster = () => {
  return (
    <div className='flex flex-col w-full sm:w-[20rem] md:w-[12rem] lg:w-[18rem] xl:w-[22rem] mx-auto rounded-xl border-2 border-blue-400 dark:border-white h-full'>
      <Image
        src="/disaster.jpg"
        alt="Disaster Image"
        width={1920}
        height={1080} 
        // layout="responsive"
        className='rounded-t-xl'
      />
      <div className='flex flex-col px-4 py-2'>
        <h2 className='text-lg font-semibold'>We Care</h2>
        <h3 className='text-md font-semibold text-gray-700'>Banjir bandang</h3>
        <Progress value={50} />
        <div className='flex justify-between text-sm text-gray-600'>
          <p>70.000.000</p>
          <p>23 Days</p>
        </div>
      </div>
    </div>
  )
}

export default CardSampleDisaster
