'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

const photos = [
  "hero1.jpg",
  "hero2.jpg",
  "hero3.jpg",
  "hero4.jpg",
  "c1.jpg",
  "hero5.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    if (currentIndex === 0) { return setCurrentIndex(2) }
    const newIndex = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentIndex(newIndex);
  };

  const next = () => {
    if (currentIndex === 2) { return setCurrentIndex(0) }
    const newIndex = (currentIndex + 1) % photos.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='overflow-hidden relative max-w-full max-h-96'>
      <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {photos.map((photo, index) => (
          <img key={index} src={photo} className='w-full max-w-screen-lg' />
        ))}
      </div>
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 
        text-gray-800 hover:bg-white hover:shadow-lg'>
          <ChevronLeft size={35} />
        </button>

        <button onClick={next} className='p-1 rounded-full shadow bg-white/80 
        text-gray-800 hover:bg-white hover:shadow-lg'>
          <ChevronRight size={35} />
        </button>
      </div>
    </div>
  );
}

export default Hero;






// 'use client'
// import React, { useState } from 'react'
// import { ChevronLeft, ChevronRight } from 'react-feather'

// const photos = [
//   "hero1.jpg",
//   "hero2.jpg",
//   "hero3.jpg",
//   "hero4.jpg",
//   "c1.jpg",
//   "hero5.jpg",
// ]

// const Hero = () => {
//   const [c1, setC1] = useState(0);
//   const [c2, setC2] = useState(1);

//   const prev = () => {

//     setC1(Math.floor(Math.random() * 6))
//     setC2(Math.floor(Math.random() * 6))
//   };

//   return (
//     <div className='overflow-hidden relative max-w-full max-h-96'>
//       <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${0 * 100}%)` }}>


//         <img src={photos[c1]} className='w-full max-w-screen-lg' />
//         <img src={photos[c2]} className='w-full max-w-screen-lg' />


//       </div>
//       <div className='absolute inset-0 flex items-center justify-between p-4'>
//         <button onClick={prev} className='p-1 rounded-full shadow bg-white/80
//         text-gray-800 hover:bg-white hover:shadow-lg'>
//           <ChevronLeft size={35} />
//         </button>

//         <button className='p-1 rounded-full shadow bg-white/80
//         text-gray-800 hover:bg-white hover:shadow-lg'>
//           <ChevronRight size={35} />
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Hero