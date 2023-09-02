import React from 'react'
import { BsBasket } from 'react-icons/bs'
import NavbarButton from '../common/NavbarButton'

export default function ShoppingBasket() {
  return (
    <NavbarButton>
      <BsBasket fill='#6868ac' size={20}/>
    </NavbarButton>
  )
}