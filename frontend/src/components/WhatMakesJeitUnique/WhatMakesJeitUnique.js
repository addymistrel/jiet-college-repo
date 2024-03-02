import React from 'react'

const WhatMakesJeitUnique = () => {
  return (
    <div className='flex w-[100vw] h-[70vh] bg-bg-1'>
      <div className='flex justify-center items-center p-10 w-[100%]'>
        <div className='flex justify-center items-center w-[40%] text-[50px] text-center text-white'>
            WHAT MAKES JIET UNIQUE
        </div>
        <div className='flex w-[60%] gap-20 p-40 text-center'>
            <div className='flex flex-col  w-[33%]'>
                <div className='text-[62px] font-bold text-white'>900+</div>
                <div className='text-[18px] text-white font-bold'>Companies for Placement</div>
            </div>
            <div className='flex flex-col  w-[40%]'>
                <div className='text-[62px] font-bold text-white'>4000+</div>
                <div className='text-[18px] text-white font-bold'>Students</div>
            </div>
            <div className='flex flex-col  w-[30%]'>
                <div className='text-[62px] font-bold text-white'>10+</div>
                <div className='text-[18px] text-white font-bold'>Programs</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhatMakesJeitUnique
