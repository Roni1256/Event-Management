import { Menu, PanelLeftClose, X } from 'lucide-react'
import React from 'react'

const Nav = () => {
    const [isOpen,setOpen]=React.useState(false)

  return (
    <div className='w-full py-10 px-6 md:px-10 flex items-center justify-between gap-10 font-regular text-white'>
        <div className=" text-4xl md:text-5xl text-nowrap font-bold font-fancy text-white">
            Perfect Events
        </div>
        <div className="hidden lg:flex font-regular">
            <ul className="flex gap-10">
                <li><a href="#home" className="hover:scale-110 transition-transform duration-300 ease-in-out inline-block">Home</a></li>
                <li><a href="#about" className="hover:scale-110 transition-transform duration-300 ease-in-out inline-block">About</a></li>
                <li><a href="#services" className="hover:scale-110 transition-transform duration-300 ease-in-out inline-block">Services</a></li>
                <li><a href="#works" className="hover:scale-110 transition-transform duration-300 ease-in-out inline-block">Works</a></li>
                <li><a href="#testimonials" className="hover:scale-110 transition-transform duration-300 ease-in-out inline-block">Testimonials</a></li>
                <li><a href="#contact" className="hover:scale-110 transition-transform duration-300 ease-in-out inline-block">Contact</a></li>
            </ul>
        </div>
        <div className=" flex  md:gap-10 gap-7 items-center ">
            <a href="#contact" className='bg-fontsecondary text-white  p-2 md:p-3 rounded-md shadow-md shadow-black/20 hover:scale-110 ease-in-out duration-300'>Book now</a>
            <button className='w-fit lg:hidden p-2 rounded-md bg-white hover:bg-gray-200 ease-in-out duration-300 hover:scale-105 text-gray-900' onClick={()=>{
                setOpen(!isOpen)
            }}><Menu/></button>
        </div>
        <div className={`z-30 fixed top-0 h-screen w-1/2 bg-fontsecondary font-regular px-4 py-5 ${isOpen?"left-0":"-left-full"} transition-all duration-500 ease-linear`}>
            <p className='text-2xl text-white flex items-center justify-between px-2'>Menu <button onClick={()=>{setOpen(false)}}><X size={30} /> </button></p>
            <hr  className='mt-2'/>
            <div className="mt-10 w-full">
                <ul className='flex flex-col gap-5 text-white w-full'>
                    <li className='w-full'><a href="#home" className='hover:pl-2 duration-300 block w-full'>Home</a></li>
                    <li className='w-full'><a href="#about" className='hover:pl-2 duration-300 block w-full'>About</a></li>
                    <li className='w-full'><a href="#services" className='hover:pl-2 duration-300 block w-full'>Services</a></li>
                    <li className='w-full'><a href="#works" className='hover:pl-2 duration-300 block w-full'>Works</a></li>
                    <li className='w-full'><a href="#testimonials" className='hover:pl-2 duration-300 block w-full'>Testimonials</a></li>
                    <li className='w-full'><a href="#contact" className='hover:pl-2 duration-300 block w-full'>Contact</a></li>
                </ul>
            </div>        
        </div>
    </div>
  )
}

export default Nav