import React from 'react'
import ChilgBringImg from '../images/Bring1-min.png';
const ChildBring = () => {
  return (
    <div className='flex flex-col p-2 bg-white rounded-xl'>
        <div><img src={ChilgBringImg} alt="" /></div>
        <div className='flex  justify-between pt-2'>
            <div className='flex flex-col'>
                <div className='text-lg font-semibold'>Prestige</div>
                <div className='text-base text-gray-400'>non active</div>
            </div>
            <div className=''><button className='border-2 border-solid rounded-lg  cursor-pointer hover:bg-blue-400 hover:text-white py-1 px-2'>Preview</button></div>
        </div>
    </div>
  )
}

export default ChildBring