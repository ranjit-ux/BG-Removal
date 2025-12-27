import React from 'react'
import StepsCard from './StepsCard'
import { assets } from '../assets/assets'
const Steps = () => {
  return (
    <div className='max-w-7xl mx-auto px-6 py-18'>
      <h1 className='text-4xl font-bold text-center text-slate-700'>Steps to remove <span className='text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-indigo-500'>background</span> <br /> image in seconds</h1>

      <div className='mt-10 mb-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
        <StepsCard 
            icon={assets.upload_icon}
            title="Upload Image"
            description="Upload any image from your device in seconds with support for all common formats."

        />
        <StepsCard 
            icon={assets.remove_bg_icon}
            title="Remove Background"
            description="Our AI automatically detects and removes the background with pixel-perfect accuracy."

        />
        <StepsCard 
            icon={assets.download_icon}
            title="Download Image"
            description="Download your high-quality image instantly with a clean, transparent background."
        />
      </div>
    </div>
  )
}

export default Steps
