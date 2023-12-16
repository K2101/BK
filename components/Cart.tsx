'use client'
import React, { memo } from 'react'
import Order from './Order';



const Cart: React.FC<any> = memo(({ menus, decr, incr, deleteMenu }) => {

  const renderOrder = () => {
    if (!menus || Object.keys(menus).length === 0) {
      return <div className='font-bold text-lg text-gray-400 mb-10'>Empty order!</div>;
    }

    return Object.keys(menus).map((menuId) => {

      const items = menus[menuId];
      const quantity = items.length;

      return (
        <div >
          <Order key={menuId}
            menu={items[0]} menuId={menuId} quantity={quantity} decr={decr} incr={incr} deleteMenu={deleteMenu}

          />

        </div>
      );
    });

  }

  const checkIsEmpty = () => {
    if (!menus || Object.keys(menus).length === 0) {
      return <></>
    }

    let isRealEmprty = false;

    for (let ob in menus) {
      if (menus[ob].length !== 0) {
        isRealEmprty = true;
        break;
      }
    }


    if (isRealEmprty) {
      return <button className='p-2 pl-4 pr-4 bg-black/80 hover:bg-black duration-200 font-bold text-xl text-white w-full rounded-md mt-5'>Place Order</button>
    }
    return <></>

  }

  return (
    <div className='sticky top-56 p-4 w-full z-30'>
      <div className='font-extrabold text-3xl text-gray-800 mb-10'>Your Order</div>

      {renderOrder()}

      {
        checkIsEmpty()
      }
    </div>

  )
})

export default Cart