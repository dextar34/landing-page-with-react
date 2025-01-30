import React from 'react'
import cn from '../lib/cn'

const Header = ({header, className}) => {
  return (
    <h2 className={cn('font-bold text-xl md:text-4xl xl:text-6xl text-[#4C4C4C]',className)}>
        {header}
    </h2>
  )
}

export default Header
