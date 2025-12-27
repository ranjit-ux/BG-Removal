import React from 'react'
import Navbar from '../components/Navbar'
import { assets } from '../assets/assets'
import Steps from '../components/Steps'
import HeroSection from '../components/HeroSection'
import BGSlider from '../components/BGSlider'
import UploadImg from '../components/UploadImg'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Steps/>
      <BGSlider/>
      <UploadImg/>
    </div>
  )
}

export default Home
