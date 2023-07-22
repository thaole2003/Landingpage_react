import React from 'react'
import Data from '../images/data.png'
import Data1 from '../images/data1.png'
import Store from '../images/store1.png'
const ChildPdo = ({}) => {
  return (
    <div className='flex flex-col text-center justify-center items-center gap-2'> 
        <div><img src={Data} alt="" /></div>
        <div className='text-l font-semibold'>All-in-one online store</div>
        <div className='text-xs text-gray-500 px-7'>
            <p>Take a few minutes to pick a theme and set up your store. We provide all you need to market, sell and manage.</p>
        </div>
    </div>
  )
}

export default ChildPdo