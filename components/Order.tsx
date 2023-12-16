'use client'
import React, { memo, useEffect } from 'react'
import { IMenuCard } from './MenuCard'


interface OrderList {
  menu: any;
  menuId: string,
  quantity: number,
  incr: (p: any) => void
  decr: (p: any) => void
  deleteMenu: (p: any) => void
}


const Order: React.FC<OrderList> = memo(({ menu, menuId, quantity, incr, decr, deleteMenu,
}) => {
  if (quantity === 0) {
    return <></>
  }

  const tempPrice = menu.discount === 0 ? (menu.price * quantity).toFixed(2) : ((menu.price - (menu.price * (menu.discount / 100))) * quantity).toFixed(2);

  return (
    <div className={`border-2 border-gray-300 w-full rounded-t-md rounded-b-md p-4 mb-2`}>
      <div className='text-xl font-bold text-gray-700'>{`${quantity}x ${menu.name}`}</div>
      <div className='text-sm font-semibold text-gray-500 mt-2'>3x Extra hardcode!</div>
      <div className='text-sm font-semibold text-gray-500 mt-2'>{menu.note || 'Empty note...'}</div>

      <div className='flex justify-between items-center mt-10'>
        <div onClick={() => deleteMenu(menuId)} className='bg-black/10 rounded-md pl-4 pr-4 p-1 font-semibold text-base text-gray-800 cursor-pointer hover:bg-black/30 duration-200'>
          Delete
        </div>
        <div className='flex justify-start items-center'>
          <div onClick={() =>
            decr(menuId)
          } className='bg-black/10 rounded-full text-2xl font-bold text-gray-600 w-8 h-8 flex justify-center items-center  cursor-pointer hover:bg-black/30 duration-200'>-</div>
          <div
            className='text-xl font-bold text-gray-600 mr-2 ml-2'
          >{quantity}</div>
          <div onClick={() =>
            incr(menuId)

          } className='bg-black/10 rounded-full text-2xl font-bold text-gray-600 w-8 h-8 flex justify-center items-center  cursor-pointer hover:bg-black/30 duration-200'>+</div>
        </div>
      </div>

      <div className='text-xl font-bold text-gray-700 mt-5 flex justify-end'>
        {tempPrice}
      </div>
    </div>
  )
})

export default Order