import React from 'react'
import cn from '../lib/cn'

const Card = ({src,alt, title, des, className}) => {
  return (
    <div className={cn('bg-white w-[350px] h-[450px] flex flex-col gap-12 py-5',)}>
      <div className={cn('icon  flex items-center justify-center',)}>
        <img src={src} alt={alt} className={cn('w-[150px]',className)} />
      </div>
      <div className={cn('title flex items-center justify-center text-3xl text-[#505050] font-bold',)}>
        {title}
      </div>
      <div className={cn('des flex items-center justify-center text-[#474747] font-semibold text-xl text-center',)}>
        {des}
      </div>
    </div>
  )
}

export default Card
