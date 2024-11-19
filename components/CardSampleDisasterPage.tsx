import React from 'react'
import CardSampleDisaster from './CardSampleDisaster'

export const CardSampleDisasterPage = () => {
  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full'>
      {"123".split("").map((index) => (
        <CardSampleDisaster key={index} />
      ))}
    </div>
  )
}
