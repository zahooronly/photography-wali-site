import Image from 'next/image'
import React from 'react'
import { FaInstagram } from 'react-icons/fa'

const Instagramimg = ({socialImage}:any) => {
  return (
    <div className='relative'>
        <Image src={socialImage} alt='/' className='w-full h-full' layout='responsive' />
        {/* Overlay */}
        <div className='flex inset-0 justify-center items-center absolute top-0 right-0 left bottom-0 hover:bg-black/50 group'>
        <p className='text-gray-300 hidden group-hover:block'> <FaInstagram size={30}/> </p>
        </div>
    </div>
  )
}

export default Instagramimg