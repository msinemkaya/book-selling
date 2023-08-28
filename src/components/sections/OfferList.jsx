import React from 'react'
import OfferListItem from '../common/OfferListItem'
import Container from '../base/Container'

export default function OfferList() {
  return (
    <Container className='my-6 space-y-4'>
      <OfferListItem />
      <OfferListItem />
      <OfferListItem />
      <OfferListItem />
      <OfferListItem />
    </Container>
  )
}
