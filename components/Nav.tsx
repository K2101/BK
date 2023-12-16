import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className='flex h-20 text-grey-500 px-8 py-4 justify-between items-center shadow-lg sticky top-0 z-50 bg-white'>
      <Link href="/">
        <img src="logo.avif" alt="Logo" className="h-20 w-auto hover:cursor-pointer hidden md:block" />
      </Link>
      <div >

        <input className='bg-gray-200 p-1.5 pl-3 w-64 rounded' placeholder='Search menu...' />

      </div>


      <div className='bg-black p-1.5 pl-6 pr-6 text-lg font-bold text-white rounded-md'>
        <Link href="/login">
          Login
        </Link>
      </div>

    </div >
  )
}

export default Nav