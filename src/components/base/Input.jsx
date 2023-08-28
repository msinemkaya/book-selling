import { forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
  const { type = 'text', className, placeholder, ...rest} = props
  return (
    <input
      ref={ref}
      type={type}
      className={className}
      placeholder={placeholder}
      {...rest}
    />
  )
})

export default Input
