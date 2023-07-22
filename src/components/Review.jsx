import React from 'react'
import CustomerRV from './CustomerRV'
const Review = () => {
  return (
    <div className='py-14'>
        <div className='text-center py-8 text-[#41466F] text-4xl font-bold'>
            <span>Customer Review</span>
        </div>
        <div className='flex justify-evenly gap-5 '>
            <CustomerRV/>
            <CustomerRV/>
            <CustomerRV/>
            <CustomerRV/>
        </div>
    </div>
  )
}

export default Review