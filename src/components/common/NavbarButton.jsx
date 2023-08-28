import React from 'react'
import Button from '../base/Button'
import classNames from 'classnames'

export default function NavbarButton({ children, className, ...rest }) {
  const finalClasses = classNames('hover:bg-neutral-300 rounded p-2', className)
  return (
    <Button className={finalClasses} {...rest}>
      {children}
    </Button>
  )
}
