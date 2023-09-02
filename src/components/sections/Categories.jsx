import React, { useEffect, useState } from 'react'
import FlexBox from '../base/FlexBox'
import useBooksContext from '../../hooks/use-books-context'
import CategoryLink from '../common/CategoryLink'
import CategoryDropdown from '../common/CategoryDropdown'
import useItemsToShow from '../../hooks/use-items-to-show'

export default function Categories() {
  const { bookList } = useBooksContext()
  const count = useItemsToShow()

  return (
    <FlexBox className='justify-between gap-4 px-6 mb-8'>
      {bookList.slice(0,count).map(list => <CategoryLink list={list} />)}
      { count < bookList.length && (
        <CategoryDropdown list={bookList.slice(count)} /> )
      }
    </FlexBox>
  )
}
