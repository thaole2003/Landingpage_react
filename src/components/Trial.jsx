import React from 'react'
import IconMess from '../images/icon-mess.png'
import backgroundImage from '../images/bgBringJpeg.jpeg';
const styles = {
  backgroundImage: `url(${backgroundImage})`,
};

const Trial = () => {
  return (
    <div className='flex w-[90%] my-20 m-auto text-center justify-between p-5 rounded-xl '  style={styles}>
        <div className='text-4xl font-bold text-gray-600 w-1/2'>Start your 14-day free trial today</div>
        <div className='flex justify-end gap-3 w-1/2'>
            <input type="text" className='w-1/3 rounded-xl' placeholder='Enter your email address' />
            <button className=' w-1/4 bg-yellow-300 text-black flex justify-center items-center content-center p-2 text-xl gap-2 font-semibold rounded-xl'>Start Free Trial</button>
        </div>
        {/* </div> */}
      
    </div>
  )
}


export default Trial