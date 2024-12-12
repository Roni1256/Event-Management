import React from 'react'

const Contact = () => {
  return (
    <div className="w-full py-16 px-4 bg-fontsecondary flex justify-center font-regular" id='contact'>
      <div className="max-w-[1000px] ">
        <div className="text-center">
          <h2 className="text-6xl  text-white mb-4 font-fancy">Ready to Plan Your Perfect Event?</h2>
          <p className="text-xl text-accent mb-8">Contact us today to start planning your next big occasion!</p>
        </div>
        
        <div className="">
          
          
          <div className="space-y-4">
            <button className="w-full py-3 px-6 bg-primary text-white rounded-lg hover:bg-secondary transition duration-300 font-semibold">
              Request a Quote
            </button>
            <button className="w-full py-3 px-6 border-2 border-[#001233] text-[#001233] rounded-lg hover:bg-[#001233] hover:text-white transition duration-300 font-semibold">
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact