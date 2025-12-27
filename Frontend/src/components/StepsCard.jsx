import React from 'react'

const StepsCard = ({icon,title,description}) => {
  return (
    <div className='p-6 bg-white rounded-2xl  shadow-sm hover:scale-105 transition duration-300 text-center' >

      <div className='w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600' > <img src={icon} alt={title} className='w-12 h-12' /> </div>

      <h3 className='mt-4 text-lg font-semibold text-slate-900'>{title}</h3>

      <p className='mt-2 text-slate-600 text-sm'>{description}</p>
    </div>
  )
}

export default StepsCard;
