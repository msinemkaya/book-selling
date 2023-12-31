import React, { useRef } from 'react'
import NavbarButton from '../common/NavbarButton'
import { SlUser } from 'react-icons/sl'
import useDropdown from '../../hooks/use-dropdown'
import RefContainer from '../base/RefContainer'
import FlexBox from '../base/FlexBox'
import { Link } from 'react-router-dom'

export default function User() {
  const dropdown = useRef(null)
  const {isOpen, handleClick} = useDropdown(dropdown)

  return (
    <RefContainer ref={dropdown} className='relative'>
      <NavbarButton onClick={handleClick} className={isOpen && 'bg-neutral-300 rounded-b-none'}>
        <SlUser fill='#6868ac' size={20}/>
      </NavbarButton>
      {isOpen && (
        <FlexBox className='absolute top-full right-0 flex-col bg-neutral-300 rounded rounded-tr-none px-3 py-1 z-50'>
          <Link to='/login' className='whitespace-nowrap font-semibold text-purple'>Log out</Link>
        </FlexBox>
      )}
    </RefContainer>
  )
}
