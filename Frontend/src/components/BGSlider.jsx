import React, { useState } from 'react'
import { assets } from '../assets/assets';

const BGSlider = () => {

  const [sliderPosition,setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value)
  }

  return (
    <div className='pb-15 md:py-20 mx-2'>
      <h1 className='mb-3 sm:mb-20 text-center text-4xl font-bold text-slate-700 md:text-3xl lg:text-4xl'>Remove Background With <br /> <span className='text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-indigo-500'>High Quality</span> and Accuracy</h1>

      <div className='relative w-full max-w-3xl overflow-hidden m-auto rounded-xl'>
        {/* background image */}
        <img src={assets.flowerWbg} style={{clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)`}} alt="" />

        {/* foreground image */}
        <img src={assets.flowerWgrid} style={{clipPath: `inset(0 0 0 ${sliderPosition}%)`}} alt="" className='absolute top-0 left-0 w-full h-full' />

        {/* slider */}
        <input type="range" min={0} max={100} value={sliderPosition} onChange={handleSliderChange}  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider'/>
        <span className="absolute top-4 left-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
          Before
        </span>
        <span className="absolute top-4 right-4 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
          After
        </span>
      </div>
    </div>
  )
}

export default BGSlider


