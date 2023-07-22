import React from 'react'
import CusRv from '../images/CusReview2.png'
import IconStart from '../images/icon-star.png'
const CustomerRV = () => {
  return (
    <div className='p-6 bg-gray-200 rounded-2xl w-[20%]'>
        <div className='flex gap-2 pb-4'>
            <img className='rounded-full' src={CusRv} alt="" />
            <div className='flex flex-col'>
              <div>Savannah Nguyen</div>
              <div className='flex gap-[2px]'>
                <img src={IconStart} alt="" />
                <img src={IconStart} alt="" />
                <img src={IconStart} alt="" />
                <img src={IconStart} alt="" />
                <img src={IconStart} alt="" />
              </div>
            </div>
        </div>
        <div className='text-l text-gray-500'>
        “I know about ShopBase because someone on Verum Ecom mentioned it. ShopBase is 9/10 to me, your apps & themes are wonderful and free”
        </div>
    </div>
  )
}

export default CustomerRV