import React from 'react'
import FlexBox from '../base/FlexBox'
import useBooksContext from '../../hooks/use-books-context'
import CategoryLink from '../common/CategoryLink'
import CategoryDropdown from '../common/CategoryDropdown'

export default function Categories() {
  const { bookList } = useBooksContext()
  return (
    <FlexBox className='justify-between gap-4 px-6 mb-8'>
      {bookList.slice(0,3).map(list => <CategoryLink list={list} />)}
      <CategoryDropdown />
    </FlexBox>
  )
}
