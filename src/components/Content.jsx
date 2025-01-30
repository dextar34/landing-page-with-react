import React from 'react'
import cn from '../lib/cn'

const Content = ({children, className}) => {
  return (
    <div className={cn('text-[#828282] font-semibold mx-2 text-sm md:text-2xl',className)}>
        {children}
    </div>
  )
}

export default Content
