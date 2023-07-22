import React from 'react'
import BannerImage from '../images/banner-min.png'
const Banner = () => {
  return (
    <div className='h-screen flex w-full'>
        <div className='cleft w-1/2 h-full flex flex-col content-center pt-10 justify-center items-center'>
        <div className=" text-5xl font-extrabold">
                <p className='text-[#41466F]'><span className='text-[#2ec6d9]'>Build</span> your online <br /> POD store in minutes.</p>
        </div>
        <div className="text-gray-500">
                <p>
                  - Your new POD store is just a few clicks away, and 
                  it&apos;s FREE!
                </p>
                <p>
                  - Take the first step of creating your store, we 
                  will take care of the rest.
                </p>
                <div className=" flex mt-6 ">
                  <input className="mr-3 border-2 border-gray-400 border-solid w-1/3 rounded-lg" placeholder="Enter yout email..."></input>
                  <button className="bg-[#2ec6d9] text-white p-2 rounded-lg" >
                    Star Free Trial
                  </button>
                </div>
              </div>
        </div>
        <div className='cright w-1/2 h-full'>
            <img src={BannerImage} alt="" />
        </div>
    </div>
  )
}

export default Banner