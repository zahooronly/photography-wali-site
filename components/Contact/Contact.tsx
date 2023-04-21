import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4 h-screen'>
        <h1 className='text-2xl font-bold p-4 text-center'>Let's Work Together</h1>
        <form className='max-w-[600px] m-auto ' >
            <div className='grid grid-cols-2 gap-2'>
                <input className='border-2 border-gray-300 rounded-md focus:outline-none shadow-lg p-3 ' type='text' placeholder='Name'/>
                <input className='border-2 border-gray-300 rounded-md focus:outline-none shadow-lg p-3 ' type='email' placeholder='Email'/>
            </div>
            <input className='shadow-lg border-2 border-gray-300 rounded-md focus:outline-none p-3 w-full my-2' type="text" placeholder='Subject' />
            <textarea className='shadow-lg border-2 border-gray-300 rounded-md focus:outline-none p-3 w-full' cols={30} rows={10} placeholder='Message'></textarea>
            <button className='border-2 border-gray-300 rounded-md focus:outline-none shadow-lg w-full mt-2 p-3'>Submit</button>
        </form>
    </div>
  )
}
export default Contact