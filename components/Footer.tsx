import React from 'react'

const Footer = () => {
  return (
    <div className='mt-14 p-20 pb-10 flex justify-between items-center'>
      <div className='h-40 w-40 -ml-16 md:ml-0'>
        <img src='logo.avif' />
      </div>

      <div>
        <div className='font-bold text-lg text-black'>Operate Day & Time.</div>
        <div className='font-bold text-lg text-black'>Mon - Fri, 09:00-18:00 UTC.</div>
      </div>

      <div>

        <div className='font-bold text-lg text-black'>Follow Us</div>
        <div >
          <div className='h-10 w-10 flex justify-start items-center cursor-pointer -ml-4 '>
            <img src='logo.avif' />
            <img src='logo.avif' />
            <img src='logo.avif' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer