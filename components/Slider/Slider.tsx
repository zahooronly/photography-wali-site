import Image from 'next/image'
import React, { useState } from 'react'
import {FaArrowCircleLeft,FaArrowCircleRight} from 'react-icons/fa'
const Slider = ({slides}:any) => {
    const [current, setCurrent] = useState(0)
    const length=slides.length

    const nextSlide =()=>{
        setCurrent(current === length-1?0:current+1)
    }
    const prevSlide =()=>{
        setCurrent(current === 0?length-1:current-1)
    }

    if (!Array.isArray(slides)|| length<=0) {
        return null;
    }
  return (
    <div id='gallery' className='max-w-[1240] mx-auto'>
        <h1 className='text-2xl font-bold text-center p-4'>Gallery</h1>
            <div className='relative flex justify-center p-4'>
        <div>
            {slides.map((slide:any,index:any)=>{
                return(
                    <div key={index} className={index===current? 'opacity-[1] ease-in duration-1000':'opacity-0'}>
                        <FaArrowCircleLeft onClick={prevSlide} size={50} className='absolute top-[50%] left-[5%] text-white/70 cursor-pointer select-none z-[2]'/>
                        {index===current&&(
                            <Image
                                src={slide.image}
                                alt=''
                                width={1440}
                                height={600}
                                className='h-600 object-cover'
                                loader={({ src, width, height }:any) => `${src}?w=${width}&h=${height}&fit=crop`}
                                />
                            )}
                             
                        <FaArrowCircleRight onClick={nextSlide} size={50} className='absolute top-[50%]  right-[5%] text-white/70 cursor-pointer select-none z-[2]'/>
                    </div>
                )
            })}
        </div>
            </div>
    </div>
  )
}

export default Slider