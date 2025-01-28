import React from 'react'
import cn from '../lib/cn'

const Content = ({children, className}) => {
  return (
    <div className={cn('text-[#828282] font-semibold text-2xl',className)}>
        {children}
    </div>
  )
}

export default Content
