import React from 'react'
import H1 from '../base/H1'

export default function DetailHeading({ children }) {
  return (
    <H1 className='uppercase colorful text-dark font-bold text-center text-2xl sm:text-4xl leading-9 tracking-wide py-6 mx-12 mb-8 border-b-4 border-dotted border-b-blue-400/60'>{children}</H1>
  )
}
