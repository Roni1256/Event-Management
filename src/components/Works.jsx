import React from 'react'
import img1 from '../asset/1.jpg'
import img2 from '../asset/2.jpg'
import img3 from '../asset/3.jpg'
import img4 from '../asset/4.jpg'
import img5 from '../asset/5.jpg'
import img6 from '../asset/6.jpg'
import img7 from '../asset/7.jpg'
import img8 from '../asset/8.jpg'
import { CarouselImg } from './CarosuleImg'
import { ChevronRight } from 'lucide-react'

const imgArr=[img1,img2,img3,img4,img5,img6,img7,img8]
const Works = () => {
  return (
    <div className="flex  justify-center bg-secondary w-full  p-20 px-10 md:px-20" id='works'>
        <div className="max-w-[1000px] ">
            <h1 className='text-6xl  font-fancy font-semibold text-fontprimary'>Our Work Speaks for itself</h1>
            <p className='text-fontprimary font-regular mt-5 text-lg max-w-[400px]'>Take a look at some of the memorable events we’ve brought to life.<button className="flex items-center gap-2 text-fontprimary hover:text-primary transition-colors duration-300 font-medium">View More <ChevronRight/></button>   </p>
            <div className="mt-5">
                <CarouselImg imgs={imgArr}/>
                         
            </div>      
        </div>
    </div>
  )
}

export default Works