import React from 'react'
import ChildPdo from './ChildPdo'
const Pdo = () => {
  return (
    <div>
        <div className='text-center text-[#41466F] text-4xl font-bold'>
            <span>Take your POD Business to <br /> a whole new level!</span>
        </div>
        <div className='flex mt-8'>
            <ChildPdo/>
            <ChildPdo/>
            <ChildPdo/>
            <ChildPdo/>
        </div>
    </div>
  )
}

export default Pdo