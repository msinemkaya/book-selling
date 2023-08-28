import React from 'react'
import Container from '../base/Container'
import classNames from 'classnames'

export default function Bubble( {className }) {
  const finalClasses = classNames('absolute', className)
  return (
    <Container className={finalClasses}>
      <Container className='ball'/>
    </Container>
  )
}
