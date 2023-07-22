import React from 'react'
import Kingfy from '../images/Kingify-min.png'
import LogoK from '../images/LogoK.png'
import World from '../images/mapWorld-min.png'
const DropShip = () => {
  return (
    <div className='flex flex-col w-full'>
    <div className='flex justify-around p-12'>
        <div className='w-1/3 flex flex-col gap-10 mt-10'>
            <div><img src={LogoK} alt="" /></div>
            <div className='text-4xl font-bold text-cyan-900'>Your drop-shipping partner.</div>
            <div className='text-gray-400 tracking-wide'>While Viemart is the e-commerce platform to build your online store, another member of our retail ecosystem, Kingify, will help to fulfill your drop-shipping business. The days of living with a long list of suppliers are no more.</div>
        </div>
        <div className='w-1/3'><img  className='h-[80%]' src={ Kingfy} alt="" /></div>
    </div>
    <div className='text-4xl text-gray-700 font-extrabold text-center'>
    Our products have travelled the world
    </div>
    <div className='w-full h-full flex justify-center'>
        <img className='w-[80%]  h-[80%]' src={World} alt="" />
    </div>
    </div>
  )
}

export default DropShip