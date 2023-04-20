import React from 'react'
import Price from '../Price/Price';

const Hero = (props:any) => {
    const heading=props.heading;
    const message=props.message;
  return (
    <div className='flex justify-center items-center h-screen mb-12 bg-fixed bg-cover bg-center custom-img'>
        <div className='absolute left-0 right-0 top-0 bottom-0 bg-black/70 z-[2]' />
        <div className='p-5 text-white z-[2] mt-[-10rem]'>
            <h2 className='text-6xl font-bold '>{heading}</h2>
            <p className='py-5 text-xl'>{message}</p>
            <button className='px-8 py-2 border '>Click me</button>
        </div>
    </div>
  )
}

export default Hero