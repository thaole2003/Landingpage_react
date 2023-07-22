import React from 'react'
import backgroundImage from '../images/bgBringJpeg.jpeg';
import IconPlus from '../images/icon-plus.png';
import IconEye from '../images/icon-eye.png'
import BannerAbout1 from '../images/TemplateBanner1.png'
import BannerAbout2 from '../images/TemplateBanner2.jpg'
import IconUp from '../images/icon-up.png';
import IconDown from '../images/icon-down.png';
const styles = {
    backgroundImage: `url(${backgroundImage})`,
  };
const BannerAbout = () => {
  return (
    <div className='flex pt-16 h-[80vh] ' style={styles}>
        <div className='flex flex-col w-[60%] h-full  px-20 justify-center'>
            <div className='text-5xl font-bold text-black py-8'>Handicraft</div>
            <div className='w-[30%] py-4 text-lg'>Change the look and feel of your store in a few clicks with the Handi template - an excellent choice optimized for single-product stores.</div>
            <div className='flex  gap-5 pt-2'>
            <button className='bg-yellow-300 text-black flex justify-center items-center content-center p-3 text-xl gap-2 font-semibold rounded-xl'> <img src={IconPlus} alt="" /><div>Add Template</div> </button>
            <button className='bg-black text-white flex justify-center items-center content-center p-3 text-xl gap-2 font-semibold rounded-xl'><img src={IconEye} alt="" /> Preview</button>
        </div>
        </div>
        <div class=" w-[40%] carousel h-full flex items-center justify-start">
        <div class="carousel-item flex relative justify-start py-20 items-center">
            <img
              class="img-1 z-10 mr-[-40px]"
              src={BannerAbout1}
              alt="First slide"
            />
            <img
              class="img-2 x-0"
              src={BannerAbout2}
              alt="Second slide"
            />
        </div>
        <div className='flex flex-col py-20 gap-y-20 items-center'>
            <img className='w-16 h-16 cursor-pointer' src={IconUp} alt="" />
            <img className='w-16 h-16 cursor-pointer'  src={IconDown} alt="" />
        </div>
</div>
    </div>
  )
}

export default BannerAbout