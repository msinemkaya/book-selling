import React from 'react'
import FlexBox from '../base/FlexBox'
import Image from '../base/Image'
import cover from '../../assets/book-cover.jpeg'
import P from '../base/P'
import Container from '../base/Container'
import { Link } from 'react-router-dom'
import AppButton from './AppButton'

export default function BookCard({ book }) {
  return (
    <Container className='group h-96 block w-60 [perspective:1000px] my-10 mx-auto'>
      <Container className='relative h-full w-full transition-all duration-500 rounded-xl bg-white xs:shadow-xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
        <FlexBox className='absolute inset-0 p-6 flex-col items-center justify-center gap-4'>
          <Image src={cover} className='object-contain' />
          <P className='text-center font-medium text-orange capitalize'>
            {book.title}
          </P>
        </FlexBox>
        <Container className='absolute p-6 inset-0 h-full w-full rounded-xl bg-white text-center text-red-400 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
          <Container className='capitalize flex min-h-full flex-col justify-between'>
            <Container className='my-auto'>
              <P>{book.writer}</P>
              <P className='text-lg font-bold'>{book.title}</P>
            </Container>
            <Link to={`/book-detail/${book.id}`}>
              <AppButton>
                <P>See offers</P>
              </AppButton>
            </Link>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}
