'use client'
import React, { memo, useState } from 'react'

interface Modal {
  onClose: () => void
  setAddMenu: (p: any) => void
  id: number,
  name: string,
  desc: string,
  photo: string,
  price: number,
  discount: number,
}




const Modal: React.FC<Modal> = memo(({ onClose, setAddMenu, id, name, desc, photo, price, discount }) => {
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState('')

  const inc = () => {
    if (quantity === 20) { return }
    setQuantity((q) => q + 1);
  }

  const decs = () => {
    if (quantity === 1) { return }
    setQuantity((q) => q - 1);
  }

  const add = () => {
    setAddMenu({ quantity, menuId: id, note, price, discount, name })
    window.history.replaceState({}, '', '/');
    onClose()
  }

  const closeModal = () => {
    window.history.replaceState({}, '', '/');
    onClose()
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center h-full w-full z-50'>

      <div className='bg-white w-3/5 md:w-2/5 h-auto  rounded-md relative'>

        <div onClick={closeModal} className='p-1 h-8 w-8 flex justify-center items-center right-3 top-3 rounded-full bg-white text-base font-semibold text-black absolute cursor-pointer'>X</div>


        <div className='overflow-hidden w-full md:h-72 h-40'>

          <img className='rounded-md ' src={photo}
          />
        </div>

        <div className='p-4'>

          <div className='font-bold text-gray-700 text-xl mt-8'>{name}</div>
          <div className='font-md text-gray-400 text-base mt-1'>{desc}</div>
          <textarea onChange={(e) => setNote(e.target.value)} maxLength={300} className='mt-10 w-full p-2 font-semibold text-base text-gray-700 border-2 rounded' placeholder='A few note for Chief...'>{note}</textarea>

          <div className='flex justify-between items-center mt-6'>
            <div className='flex justify-start items-center'>
              <div onClick={decs} className='bg-black/10 rounded-full text-2xl font-bold text-gray-600 w-8 h-8 flex justify-center items-center  cursor-pointer hover:bg-black/30 duration-200'>-</div>
              <div
                className='text-xl font-bold text-gray-600 mr-2 ml-2'
              >{quantity}</div>
              <div onClick={inc} className='bg-black/10 rounded-full text-2xl font-bold text-gray-600 w-8 h-8 flex justify-center items-center  cursor-pointer hover:bg-black/30 duration-200'>+</div>
            </div>

            <div onClick={add} className='bg-black/95 rounded-md pl-8 pr-8 p-2 font-semibold text-base text-gray-100 cursor-pointer hover:bg-black/30 duration-200 hover:text-gray-900'>
              Add
            </div>
          </div>

        </div>
      </div>
    </div >
  )
})

export default Modal