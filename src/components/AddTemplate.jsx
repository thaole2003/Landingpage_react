import React from 'react'
import BlShop1 from '../images/blockshop1.png';
import BlShop2 from '../images/blockshop2.png';
const AddTemplate = () => {
  return (
    <div className='w-full flex h-[50vh] bg-gray-100 p-4 rounded-xl'>
        <div className='w-[50%] h-full flex gap-2'>
            <div className='w-[60%] h-full'><img className='w-full h-full' src={BlShop1} alt="" /></div>
            <div className='w-[40%] h-full'><img className='w-full h-full' src={BlShop2} alt="" /></div>
        </div>
        <div className='w-[50%] flex flex-col justify-center px-16'>
            <div className='text-2xl font-bold '>Broadcast</div>
            <div className='w-[40%] py-3 text-sm text-gray-600'>We pre-made highly converted websites targeted for Dropshipping, Print-on-demand & White label businesses, so you can have a fully functional store within just 1 click. No more longtime setup.</div>
            <div className='flex gap-3'>
                <button className='p-3 rounded-lg bg-[#2ec6d9] text-white' >Add Template</button>
                <button className='p-3 rounded-lg bg-black text-white' >Mobile</button>
                <button className='p-3 rounded-lg bg-black text-white' >Desktop</button>
            </div>
        </div>
    </div>
  )
}

export default AddTemplate