import React from 'react'

const RefContainer = React.forwardRef((props, ref) => {
  const { children, className, ...rest } = props
  return (
    <div className={className} ref={ref} {...rest}>
      {children}
    </div>
  )
})

export default RefContainer