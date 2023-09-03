import React from 'react'
import OfferListItem from '../common/OfferListItem'
import Container from '../base/Container'

export default function OfferList({ offers }) {
  return (
    <Container className='my-6 space-y-4'>
      {offers.map((offer, index) => <OfferListItem offer={offer} key={index}/>)}
    </Container>
  )
}
