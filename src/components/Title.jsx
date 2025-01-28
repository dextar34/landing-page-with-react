import React from 'react'
import cn from '../lib/cn'

const Title = ({title}) => {
  return (
    <h3 className={cn('text-[#F4980D] text-2xl font-bold capitalize')}>
        {title}
    </h3>
  )
}

export default Title
