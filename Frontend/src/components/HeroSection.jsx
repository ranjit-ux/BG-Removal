import React from 'react'
import { assets } from '../assets/assets'
const HeroSection = () => {
  return (
    <div>
        <div className='max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12'>

          {/* Left */}
          <div className='max-w-xl text-neutral-900'>
            <h1 className=' text-4xl md:text-5xl font-bold leading-tight'>
              Remove the
              <br className='max-md:hidden' /> <span className='hero-highlight'>background</span> of the image <br className='max-md:hidden' /> for free.
            </h1>
            <p className='hero-desc mt-6 text-gray-600'>
               Instantly remove image backgrounds with pixel-perfect accuracy.
               Upload your photo and get a transparent background in seconds no design skills required.
            </p>
            <button className='mt-8 bg-purple-500 hover:bg-purple-600 text-white  rounded-full font-medium transition flex px-6 py-3 justify-between items-center gap-2 cta-btn'>
              <img src={assets.upload_btn_icon} alt="icon" className='h-4' />
              Upload Image
            </button>

            <p className="mt-3 text-[0.9rem] text-slate-500">
  No signup required • Free to use
</p>
          </div>

          {/* Right */}
          <div>
            <img src={assets.temp} alt="image" className='w-[380px] md:w-[420px]' />
          </div>
        </div>
    </div>
  )
}

export default HeroSection
