import React from 'react'
import Container from '../base/Container'
import FlexBox from '../base/FlexBox'
import P from '../base/P'
import { MdOutlineSell } from 'react-icons/md'
import ItemInfo from './ItemInfo'
import AppButton from './AppButton'

export default function OfferListItem() {
  return (
    <FlexBox className='flex-col sm:flex-row w-4/5 mx-auto p-4 px-12 border rounded gap-12 relative justify-evenly'>
        <Container className='space-y-5'>
          <FlexBox className='items-center justify-center gap-1'>
            <MdOutlineSell fill='rgb(255 121 0 )'/>
            <P className='font-bold text-orange text-xl whitespace-nowrap'>Melike Sinem Kaya</P>
          </FlexBox>
          <P className='text-red-400 font-extrabold text-2xl text-center underline decoration-wavy decoration-amber-200 decoration-4'>£3.99</P>
        </Container>
        <Container className='basis-3/5 pb-6 relative'>
          <Container className='w-3/5 mb-14 sm:mb-10 whitespace-nowrap'>
            <ItemInfo title='Edition'>1st edition</ItemInfo>
            <ItemInfo title='condition'>barely used</ItemInfo>
          </Container>
          <Container className='absolute bottom-0 right-0'>
            <AppButton>Add to cart</AppButton>
          </Container>
        </Container>
    </FlexBox>
  )
}

