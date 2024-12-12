import React from 'react'
import Nav from './Nav'
import heroimg from '../asset/heroimg.jpg'
import { ArrowBigDown, ArrowDown, ScrollIcon } from 'lucide-react'

const Hero = () => {
  return (
    <>
    <div className="h-screen w-full bg-primary flex flex-col items-center" style={{
      backgroundImage:`url(${heroimg})`,
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover"
      
    }}>
        <Nav/>
        <div className="flex flex-col items-center justify-center h-2/3  ">
          <h1 className='text-4xl md:text-5xl text-center px-10 font-bold font-regular text-white'>Make Every Moment Perfect with Perfect Events</h1>
          <h3 className='mt-4 text-lg max-w-[800px] text-center text-white px-20'>From planning to execution, we bring your vision to life with flawless precision.
          </h3>
          <a className='bg-fontsecondary text-white p-4  rounded-md shadow-md shadow-black/20 hover:scale-110 ease-in-out duration-300 mt-7 text-xl' href='#contact'>Book us Now</a>
        </div>
        <a className=' rounded-full text-white p-2 ring-4 animate-pulse hover:bg-white hover:text-gray-900 ease-in-out duration-300 transition-all hover:animate-none ring-white' href='#about'><ArrowDown size={30} /></a>
        <span className='text-white mt-2 font-bold animate-pulse'>Scroll to view more</span>
        
    </div>
    </>
  )
}

export default Hero