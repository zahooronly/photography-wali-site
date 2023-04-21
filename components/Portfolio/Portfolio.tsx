import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
  return (
    <div className='max-w-[1240] mx-auto py-16 text-center'>
        <h1 className='font-bold p-4 text-2xl'>My Travel Work</h1>
        <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
            <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                <Image
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
                    alt=""
                    width={451}
                    height={671}
                    loader={({ src, width, height }:any) => `${src}?w=${width}&h=${height}&fit=crop`}
                    />
            </div>
            <div className='w-full h-full '>
                <Image
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
                    alt=""
                    width={215}
                    height={217}
                    loader={({ src, width, height }:any) => `${src}?w=${width}&h=${height}&fit=crop`}
                    className='object-cover'
                    />
            </div>
            <div className='w-full h-full '>
                <Image
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
                    alt=""
                    width={215}
                    height={217}
                    loader={({ src, width, height }:any) => `${src}?w=${width}&h=${height}&fit=crop`}
                    className='object-cover'
                    />
            </div>
            <div className='w-full h-full '>
                <Image
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
                    alt=""
                    width={215}
                    height={217}
                    loader={({ src, width, height }:any) => `${src}?w=${width}&h=${height}&fit=crop`}
                    className='object-cover'
                    />
            </div>
            <div className='w-full h-full '>
                <Image
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
                    alt=""
                    width={215}
                    height={217}
                    loader={({ src, width, height }:any) => `${src}?w=${width}&h=${height}&fit=crop`}
                    className='object-cover'
                    />
            </div>
        </div>
    </div>
  )
}

export default Portfolio