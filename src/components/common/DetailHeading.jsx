import React from 'react'
import H1 from '../base/H1'

export default function DetailHeading({ children }) {
  return (
    <H1 className='uppercase text-dark font-semibold text-center text-xl sm:text-3xl leading-9 tracking-wide py-6 mx-4 mb-8 border-y border-y-blue-400/60'>{children}</H1>
  )
}
