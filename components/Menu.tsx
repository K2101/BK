'use client'
import React from 'react'

interface Menu {
  menu: number;
  setMenu: (newMenu: number) => void;
}


// a lot of memo here because I'm placing state as top level components instead of global like retux,
// It's may render a lot of we not cache or memo them.

// I actually prefer raw CSS like styled-components, but somehow, I end up with Tailwind and it's just not really good
// for fine-grain styles writing.

// this comprise of 3 buttons to choose menu like pizza, burger, salad, I also choose to display this
// for better mobile user.
const Menu: React.FC<Menu> = ({ menu, setMenu }) => {
  return (
    <div className='flex h-24 bg-white shadow-lg justify-center px-8 py-6 sticky top-20 z-40'
    >

      <button onClick={() => setMenu(0)} className={`p-1 w-24 ${menu === 0 ? 'bg-black' : 'bg-black/50'} rounded-md text-white hover:bg-black transition duration-200`}>Pizza</button>
      <button onClick={() => setMenu(1)} className={`ml-8 p-1 w-24 ${menu === 1 ? 'bg-black' : 'bg-black/50'} rounded-md text-white hover:bg-black transition duration-200`}>Burger</button>
      <button onClick={() => setMenu(2)} className={`ml-8 p-1 w-24 ${menu === 2 ? 'bg-black' : 'bg-black/50'} rounded-md text-white hover:bg-black transition duration-200`}>Salad</button>
    </div >
  )
}

export default Menu