import React from 'react'
import NavTemplate from './NavTemplate'
import AddTemplate from './AddTemplate';
import Trial from './Trial';
const ContentTemplate = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <NavTemplate/>
        <div className='flex flex-col gap-10 w-[90%] items-center justify-center'>
        <AddTemplate/>
        <AddTemplate/>
        <AddTemplate/>
        <AddTemplate/>
        <AddTemplate/>
        </div>
        <Trial/>
       
    </div>
  )
}

export default ContentTemplate