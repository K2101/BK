'use client'
import React, { useState } from 'react'

const Step: React.FC<any> = ({ menuList, menuHover, setMenuHover }) => {

  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: any) => {
    setMenuHover(id)
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      const headerOffset = 190;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-56 p-4 w-full z-30 items-center">

      <div className='flex flex-col'>

        {menuList.map((m: any, index: number) => {
          return <a key={m.id} onClick={(e) => onPress(e, m.id)} href={`#product_id_${m.id}`}
            className={`w-full ${m.id == menuHover ? 'bg-black' : 'bg-gray-400'} mt-5 rounded-md p-2 text-base font-semibold text-white`}
            data-to-scrollspy-id="product_id_1"
          >
            {`${index + 1}. ${m.name}`}
          </a>
        })}


      </div>

    </div >


  )
}




export default Step