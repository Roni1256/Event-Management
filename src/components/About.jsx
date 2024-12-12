import { BookUser, CalendarCheck, Clock, UsersRound } from 'lucide-react'
import React from 'react'
import team from '../asset/team.svg'
const About = () => {
  return (
    <div className="relative overflow-hidden">
    
    <div className='h-1/2 w-full bg-[#d2c3f587] px-10 md:px-20 py-20 text-fontprimary font-regular flex flex-col lg:flex-row justify-center gap-10 lg:gap-32 items-center relative z-10 backdrop-blur-md' id='about'>
        
        <img src={team} alt="team img" />
        <div className="max-w-[1000px]">

        <h1 className='text-6xl  font-semibold w-full font-fancy'>Why Choose Perfect Events?</h1>
        <p className='text-md mt-5 text-justify mb-5 max-w-[500px]'>
            Perfect Events is your trusted partner for crafting unforgettable experiences. With years of expertise in managing weddings, corporate events, parties, and more, we ensure every detail is seamless and stress-free. Let us turn your dreams into reality!
        </p>
        <div className=" grid  grid-cols-2 gap-5 w-full items-center justify-center">
            <h1 className='text-5xl font-semibold text-fontsecondary w-full items-center text-center bg-white p-5 rounded-lg shadow-lg font-fancy '>Specials!</h1>
            <Card title={"Experienced Team"} icon={<UsersRound size={20} />}/>
            <Card title={"Tailored Event Solutions"} icon={<CalendarCheck  size={20}/>}/>
            <Card title={"Trusted by Hundreds of Clients"} icon={<BookUser size={20} />}/>
            <Card title={"On-Time and On-Budget Execution"} icon={<Clock size={20}/>}/>
        </div>
        </div>
    </div>
        <div className="w-[300px] h-[300px] absolute bg-fontsecondary rounded-tr-full bottom-0 left-0 filter blur-3xl"/>
        <div className="w-[300px] h-[300px] absolute bg-fontsecondary/40 rounded-bl-full top-0 right-0 filter blur-3xl"/>
    </div>
        
  )
}
function Card({title,icon}){
    
    return <>
    <div className="flex items-center gap-5 bg-fontprimary text-white  p-5 text-md font-semibold rounded-md w-full h-full shadow-xl shadow-black/20">
        <span>{icon}</span>
        <h1>{title}</h1>
    </div>
    </>
}

export default About