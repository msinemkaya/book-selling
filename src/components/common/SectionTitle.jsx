import React from 'react'
import H2 from '../base/H2'
import { GiSpellBook } from 'react-icons/gi'
import { AiOutlineArrowRight } from 'react-icons/ai'
import FlexBox from '../base/FlexBox'
import { Link } from 'react-router-dom'

export default function SectionTitle({ children, route }) {
  return (
    <FlexBox className='border-b-2 border-yellow items-center justify-between mb-4'>
      <H2 className='capitalize font-semibold text-2xl mb-2 colorful'>
        {children}
      </H2>
      <Link className='relative group min-w-0' to={`/section/${route}`} >
        <AiOutlineArrowRight fill='#FFB650' className='group-hover:scale-0 transition-all'/>
        <GiSpellBook size={22} fill='#FFB650' className='absolute bottom-0.5 right-0.5 scale-0 group-hover:scale-100 transition-all'/>
      </Link>
    </FlexBox>
  )
}
