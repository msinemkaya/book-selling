import React from 'react'
import Button from '../base/Button'
import Star from './Star'

export default function ({ children }) {
  return (
    <Button className='bg-neutral-200 text-red-400 rounded py-1 px-6 font-semibold relative group w-full'>
      {children}
      <Star className='top-[20%] left-[20%] w-6 group-hover:-top-[80%] group-hover:-left-[30%] group-hover:z-20'/>
      <Star className='top-[45%] left-[45%] w-4 group-hover:-top-1/4 group-hover:left-[10%] group-hover:z-20'/>
      <Star className='top-[40%] left-[40%] w-1 group-hover:top-[55%] group-hover:left-1/4 group-hover:z-20'/>
      <Star className='top-[20%] left-[40%] w-2 duration-700 group-hover:top-[30%] group-hover:left-[80%] group-hover:z-20'/>
      <Star className='top-1/4 left-[45%] w-4 duration-500 group-hover:left-[115%] group-hover:z-20'/>
      <Star className='top-[5%] left-1/2 w-1 duration-700 group-hover:left-[60%] group-hover:z-20'/>
    </Button>
  )
}
