import Image from 'next/image'
import React from 'react'
import Avatar from '@/public/avatar.jpg'

export default function Intro() {
  return (
    <section>
      <div className='flex items-center justify-center'>
        <div>
          <Image
            src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100'
            alt='JiaCheng portrait'
            width='192'
            height='192'
            quality='95'
            priority={true}
            className='z-[999] h-24 w-24 rounded-full object-fit border-[0.35rem] border-white shadow-xl'
          />
          <span className='text-4xl'>🌈</span>
        </div>
      </div>
    </section>
  )
}
