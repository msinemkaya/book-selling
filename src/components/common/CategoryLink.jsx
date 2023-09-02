import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryLink({ list, className, ...rest }) {
  const finalClasses = classNames('uppercase stroke text-xl' , className)
  return (
    <Link to={`/section/${list.id}`} className={finalClasses} {...rest}>{list.title}</Link>
  )
}
