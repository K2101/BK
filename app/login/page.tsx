import React from 'react';

const Login = () => {
  return (
    <div className='flex justify-center  w-full mt-56'>
      <div className='bg-gray-200 p-20 rounded-lg'>
        <div className='flex justify-between items-center'>
          <label className='text-lg font-bold text-black'>Email</label>
          <input className='p-1 border rounded-md border-gray-500' placeholder='Example@gmail.com' />
        </div>
        <div className='flex justify-between items-center mt-5'>
          <label className='text-lg font-bold text-black'>Password</label>
          <input className='p-1 border rounded-md border-gray-500 ml-6' type='password' placeholder='*********' />
        </div>
        <button className='flex justify-center items-center mt-8 w-full p-2 text-lg font-bold text-white rounded-md bg-black'>Login</button>
      </div>
    </div>
  );
};

export default Login;
