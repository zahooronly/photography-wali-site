import React from 'react'
import image1 from '../../public/assets/image1.jpg'
import image2 from '../../public/assets/image2.jpg'
import image3 from '../../public/assets/image3.jpg'
import image4 from '../../public/assets/image4.jpg'
import image5 from '../../public/assets/image5.jpg'
import image6 from '../../public/assets/image6.jpg'
import Instagramimg from './Instagramimg'
const Instagram = () => {
  return (
    <div className='max-w-[1240] mx-auto text-center py-24 '>
      <p className='text-2xl font-bold'>Follow me on Instagram</p>
      <p className='pb-4 '>@Moments</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4'>
        <Instagramimg socialImage={image1}/>
        <Instagramimg socialImage={image2}/>
        <Instagramimg socialImage={image3}/>
        <Instagramimg socialImage={image4}/>
        <Instagramimg socialImage={image5}/>
        <Instagramimg socialImage={image6}/>
      </div>
    </div>
  )
}

export default Instagram