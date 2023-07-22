import React from 'react'
import IconMess from '../images/icon-mess.png'
import backgroundImage from '../images/bgBringJpeg.jpeg';
const styles = {
  backgroundImage: `url(${backgroundImage})`,
};

const StartPOD = () => {
  return (
    <div className='flex flex-col w-[95%] m-auto text-center justify-center justify-items-center p-10 mb-12 '  style={styles}>
        <div className='text-4xl font-bold text-gray-600 pt-12 pb-5'>Start your POD journey today</div>
        <div className='text-lg text-gray-400 pt-5 pb-5'>
        Anytime, any days, we are eager to be your trustful partner on the POD journey ahead
        </div>
        <div className='flex justify-center gap-5'>
            <button className='bg-gray-800 text-white flex justify-center items-center content-center p-3 text-xl gap-2 font-semibold rounded-xl'> <img src={IconMess} alt="" /><div>Chat now</div> </button>
            <button className='bg-yellow-300 text-black flex justify-center items-center content-center p-3 text-xl gap-2 font-semibold rounded-xl'>Schedule Meeting</button>
        </div>
      
    </div>
  )
}

export default StartPOD