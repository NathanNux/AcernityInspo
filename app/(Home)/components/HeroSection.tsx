import { MovingBorderBtn } from '@/components/ui/Movingborder'
import Link from 'next/link'
import React from 'react'
import Title from './Title'

const HeroSection = () => {
  return (
    <div className='min-h-[65vh] flex lg:flex-row flex-col gap-20 items-center justify-between md:mx-10'>
        <div className='gap-5 flex flex-col mt-5'>
            <h1 className='text-4xl lg:text-7xl font-bold'>Centrum</h1>
            <p className='md:w-96 text-lg text-gray-300'>Centrum is a place where you can find <br /> <span className='text-2xl font-bold underline underline-offset-8 decoration-green-500'>{"everything you need"}</span></p>
            <Link href={"mailto:nathanaelnux@gmail.com"}>
                  <Title 
                    title='Contact Us'
                  />
            </Link>
        </div>
        <div className='mb-20 pb-10 lg:mr-20'>
          <div className='w-72 h-72 space-y-5 -rotate-[30deg] relative'>
            <div className='flex gap-5 translate-x-8 z-10'>
              <div className='w-32 h-32 rounded-2xl bg-green-500'></div>
              <div className='w-32 h-32 rounded-full bg-indigo-500'></div>
            </div>
            <div className='flex gap-5 -translate-x-8 z-10'>
              <div className='w-32 h-32 rounded-2xl bg-indigo-500'></div>
              <div className='w-32 h-32 rounded-full bg-green-500'></div>
            </div>
            <div className='glow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0'></div>
          </div>
            <div className='bottom-5 sm:bottom-14 left-0 sm:-left-10'> 
            <MovingBorderBtn
              borderRadius='1rem'
            >
              <p>Available to Hire</p>
            </MovingBorderBtn>
           </div> 
        </div>
    </div>
  )
}

export default HeroSection