import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryLink({ type, className, ...rest }) {
  const finalClasses = classNames('uppercase stroke text-xl' , className)
  return (
    <Link to={`/section/${type}`} className={finalClasses} {...rest}>{type}</Link>
  )
}
