import { Quote } from 'lucide-react'
import React from 'react'

const Testimonials = () => {
  return (
    <div className=' bg-primary  px-10 p-20 md:px-20 flex w-full justify-center sticky' id='testimonials'>
        <div className="max-w-[1000px] w-full">
            <h1 className='w-full text-6xl font-fancy'>What Our Clients Say</h1>
            <div className="mt-8 grid lg:grid-cols-2 gap-5">
                <Card p={"Perfect Events made our wedding day unforgettable. Their attention to detail was unmatched!"}
                person={" Sarah & Tom"}
                event={"Wedding planning"}
                />
                <Card
                    person={"James"}
                    p={"The team handled everything for our annual gala, leaving us stress-free. Highly recommend!"}
                    event={"Corporate Event"}
                />
                <Card 
                    person={"Emily R., Director of Hope Foundation"}
                    p={"We were blown away by the creativity and professionalism of the Perfect Events team. Our charity gala was not only beautiful but also incredibly well-organized, helping us raise more funds than ever before. Highly recommend!"}
                    event={"Charity Fundraiser"}
                />
                <Card 
                    person={"Liam & Sophie"}
                    p={"From the moment we contacted Perfect Events, we felt at ease. They took care of everything, allowing us to enjoy our engagement party without a single worry. The result was absolutely stunning."}
                    event={"Engagement Party"}
                />            </div>
        </div>


    </div>
  )
}

function Card({event,person,p}){
    return (
        <div className="w-full h-full bg-fontprimary text-white p-5 rounded-lg shadow-lg shadow-black/10 font-regular">
            <Quote />
            <h1>{event}</h1>
            <p className='mt-2 text-lg font-bold'>{p}</p>
            <span className='text-sm font-semibold'>-{person}</span>
        </div>
    )
}

export default Testimonials