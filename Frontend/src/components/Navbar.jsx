import React from 'react'
import {assets} from '../assets/assets.js'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
const Navbar = () => {


  const {openSignIn} = useClerk()
  const {isSignedIn, user} = useUser();

  return (
    <div className='flex justify-between items-center px-10 py-4'>
      <div>
        <Link to='/'><img src= {assets.logo} alt="logo" className='h-8' /></Link>
      </div>
      <div>
        {
          isSignedIn ? 
          <div>
            <UserButton/>
          </div> :
          <button onClick={()=>{openSignIn()}} className='flex justify-center items-center gap-2 px-6 py-2 bg-black text-white rounded-3xl'>
              Get Started 
              <img src={assets.arrow_icon} alt="arrow" className='h-4' />
          </button>
        }
        
      </div>
    </div>
  )
}

export default Navbar
