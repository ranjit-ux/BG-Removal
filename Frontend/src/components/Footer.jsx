import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <footer className="mt-20 py-6 px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
  
  <div className="flex items-center gap-2">
    <img src={assets.logo} className="h-6" />
    <span>© 2025 bg.removal All rights reserved</span>
  </div>

  <div className="flex gap-3">
    <a className="hover:scale-110 transition" href="#">
      <img src={assets.facebook_icon} className="h-8 opacity-70 hover:opacity-100"  />
    </a>
    <a className="hover:scale-110 transition" href="#">
      <img src={assets.twitter_icon} className="h-8 opacity-70 hover:opacity-100"/>
    </a>
    <a className="hover:scale-110 transition" href="#">
      <img src={assets.google_plus_icon} className="h-8 opacity-70 hover:opacity-100"/>
    </a>
  </div>

</footer>

  )
}

export default Footer
