'use client'
import React, { memo, useRef, useState } from 'react'
import Modal from './Modal'
import ScrollSpy from 'react-ui-scrollspy';


export interface IMenuCard {
  id: number,
  name: string,
  desc: string,
  price: number,
  photo: string,
  discount: number,
  setAddMenu: (p: any) => void,
  setMenuHover: any
}

const MenuCard: React.FC<IMenuCard> = memo(({ id, name, desc, price, photo, discount, setAddMenu, setMenuHover }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const parentScrollContainerRef = useRef<HTMLDivElement | null>(null);

  // A bit missing in which why we need to change the url to product_id=...
  // because the entire product info is already in there.
  const select = () => {
    const newUrl = `product_id=${id}`;
    window.history.replaceState({}, '', newUrl);

    setModalOpen(true);
  }
  return (
    <div className='m-4'>
      <ScrollSpy
        offsetBottom={100}
        scrollThrottle={80}
        useBoxMethod

      >
        <div
          onMouseEnter={() => setMenuHover(id)}
          ref={parentScrollContainerRef}
          onClick={select} id={`product_id_${id}`}
          className='cursor-pointer bg-white shadow-xl rounded-md h-36 hover:shadow-2xl duration-200'>

          <div className='p-10 h-full flex justify-between items-center'>
            <div className='overflow-hidden max-w-sm'>

              <div className='flex items-center'>

                <div className='text-2xl font-bold text-gray-700'>{name}</div>
                {discount === 0 ? '' :
                  <div
                    className={`ml-3 font-semibold text-sm text-white bg-red-600 
                  p-0.5 pl-1.5 pr-1.5 rounded-lg   hidden lg:block`} >{discount}% OFF</div>
                }
              </div>
              <div className='truncate w-40 md:w-70 mt-2 font-semibold text-base text-gray-400'>{desc}</div>
            </div>
            <div className='flex items-center'>
              <div >
                {discount === 0 ? '' :
                  <div className={`font-bold text-lg ${discount !== 0 && 'text-gray-300'} line-through`} > ${price}.00</div>
                }

                <div className={`font-bold text-lg ${discount !== 0 && 'text-gray-700'}`} > ${price - (price * (discount / 100))}{discount === 0 ? '.00' : '0'}</div>
              </div>

              <img className='h-20 w-20 rounded-full ml-12 hidden sm:block' src={photo} />
            </div>
          </div>
        </div>
      </ScrollSpy>
      {isModalOpen && <Modal id={id} name={name} desc={desc} photo={photo}
        price={price} discount={discount} setAddMenu={setAddMenu} onClose={() => setModalOpen(false)} />}
    </div >
  )
})

export default MenuCard