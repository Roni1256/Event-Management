import React from 'react'

const Services = () => {
  return (
    <div className=" w-full z-30 bg-fontsecondary backdrop-blur-xl p-20 px-10 md:px-20 font-regular text-white flex  justify-center" id={"services"}>
        <div className="max-w-[1000px]"  >

            <h1 className='font-semibold font-fancy text-6xl w-fit '>Our Services
            </h1>
            <p className='mt-7'>Whether it's an intimate gathering or a grand celebration, we've got you covered.</p>
                    <div className=" mt-5 grid grid-cols-2 gap-5 items-center justify-center">
                        <Card title="Weddings" description="Plan your dream day with expert guidance and care." />
                        <Card title="Corporate Events" description="Host impactful conferences, launches, or celebrations." />
                        <Card title="Private Parties" description="Birthdays, anniversaries, and everything in between." />
                        <Card title="Custom Packages" description="Personalized solutions for unique needs." />
                    </div>
                    <div className="mt-10 flex justify-center">
                        <button className="bg-primary hover:bg-primary/80 text-white font-bold py-3 px-8 rounded-full transition-all">
                            Book Now
                        </button>
                    </div>
        </div>
    </div>  
    )
}

function Card({ title, description }) {
    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all cursor-pointer w-full h-full">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    )
}
export default Services