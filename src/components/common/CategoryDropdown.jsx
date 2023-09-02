import React, { useRef } from 'react'
import RefContainer from '../base/RefContainer'
import useDropdown from '../../hooks/use-dropdown'
import P from '../base/P'
import {FiChevronDown, FiChevronUp} from 'react-icons/fi'
import FlexBox from '../base/FlexBox'
import Container from '../base/Container'
import useBooksContext from '../../hooks/use-books-context'
import CategoryLink from './CategoryLink'

export default function CategoryDropdown({ list }) { 
  const dropdown = useRef(null)
  const {isOpen, handleSelection, handleClick} = useDropdown(dropdown)

  return (
    <RefContainer ref={dropdown} className='relative'>
      <FlexBox onClick={handleClick} className='items-center justify-center gap-1 cursor-pointer hover:scale-105 transition-all'>
        <P className='stroke uppercase text-xl'>More</P>
        {isOpen ? <FiChevronUp strokeWidth={4} stroke='#EF5097'/> : <FiChevronDown strokeWidth={4} stroke='#EF5097'/>}
      </FlexBox>
      {isOpen && (
        <FlexBox onClick={handleSelection} className='absolute top-full right-0 z-50 flex-col border-2 border-pink bg-lightblue/50 rounded rounded-tr-none px-2 py-2 text-center gap-1'>
          {list.map(list => <CategoryLink list={list} className='bg-yellow/70 hover:bg-yellow/90 p-1 px-3 rounded hover:!text-orange'/>)}
        </FlexBox>
      )}
    </RefContainer>
  )
}
