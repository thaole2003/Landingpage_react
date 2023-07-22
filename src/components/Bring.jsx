import React from 'react'
import backgroundImage from '../images/bgBringJpeg.jpeg';
import ChildBring from './ChildBring';
const Bring = () => {
  return (
    <div className='mt-12 pt-12' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='text-center flex gap-4 flex-col'>
            <div className='text-5xl font-semibold text-white'>Bring your business online.</div>
            <div className='text-s text-gray-400'>Create an ecommerce website backed by powerful tools that help you find customers, drive sales, and manage your day-to-day.</div>
        </div>
        <div className='flex justify-around mt-14'>
            <ChildBring/>
            <ChildBring/>
            <ChildBring/>
        </div>
        <div className='py-10 flex justify-center'>
            <button className=' p-3 w-1/6 bg-orange-300  rounded-lg text-white text-xl'>Explore more examples</button>
        </div>
    </div>
  )
}

export default Bring