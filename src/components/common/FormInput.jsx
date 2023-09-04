import React from 'react'
import Container from '../base/Container'
import P from '../base/P'
import Input from '../base/Input'
import classNames from 'classnames'

export default function FormInput({title, color, ...rest}) {
  const finalClassForP=classNames('font-bold capitalize px-1 text-sm',{
      'text-pink' : color === 'pink',
      'text-purple' : color === 'purple',
      'text-orange' : color === 'orange',
    })

  const finalClassForInput=classNames('rounded border-b-2 focus:outline-none w-full px-1 py-0.5 placeholder:capitalize',{
      'border-pink/60 focus:border-pink bg-pink/10' : color === 'pink',
      'border-purple/60 focus:border-purple bg-purple/10' : color === 'purple',
      'border-orange/60 focus:border-orange bg-orange/10' : color === 'orange',
    })

  return (
    <Container className='w-full'>
      <P className={finalClassForP}>
        {title}
      </P>
      <Input {...rest} className={finalClassForInput} placeholder={`${title}..`} required/>
    </Container>
  )
}
