import React from 'react'
import FlexBox from '../base/FlexBox'
import SearchBar from './SearchBar'
import ShoppingBasket from './ShoppingBasket'
import User from './User'
import useFindLocation from '../../hooks/use-location'
import { Link } from 'react-router-dom'
import { IoLibraryOutline } from 'react-icons/io5'
import NavbarButton from '../common/NavbarButton'

export default function Navbar() {
  const isHome = useFindLocation()

  return (
    <FlexBox className='items-center justify-between gap-4 py-4 px-6 mb-8'>
      <User />
      <SearchBar />
      <FlexBox className='items-center justify-center gap-1'>
        {!isHome && (
          <Link to='/'>
            <NavbarButton>
              <IoLibraryOutline />
            </NavbarButton>
          </Link>
        )}
        <ShoppingBasket />
      </FlexBox>
    </FlexBox>
  )
}
