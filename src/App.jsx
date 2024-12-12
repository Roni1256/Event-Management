import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Works from './components/Works'
import { ChevronUp } from 'lucide-react'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='relative'>
    <Hero/>
    <About/>
    <Services/>
    <Testimonials/>
    <Works/>
    <Contact/>
    <Footer/>

    <a className=' rounded-full  font-bold fixed bottom-10 right-10 hover:text-fontprimary hover:bg-white transition-all duration-300 ease-in-out  ring-4 ring-white text-white z-40 p-2 opacity-45 hover:opacity-100' href='#'><ChevronUp size={30}/></a>
    </div>
  )
}

export default App