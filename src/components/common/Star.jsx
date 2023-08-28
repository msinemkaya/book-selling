import React from 'react'
import star from '../../assets/star.svg'
import classNames from 'classnames'
import Image from '../base/Image'

export default function Star({ className }) {
  const finalClasses = classNames(
    'absolute -z-50 h-auto drop-shadow-star transition-all duration-1000 ease-star',
    className
  )

  return <Image src={star} className={finalClasses} />
}
