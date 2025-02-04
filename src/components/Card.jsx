import React from 'react'
import cn from '../lib/cn'

const Card = ({src,alt, title, des, className}) => {
  return (
    <div className={cn('bg-white w-[300px] h-[450px] mx-2 flex flex-col gap-12 py-5 rounded-2xl',)}>
      <div className={cn('icon    ',)}>
        <img src={src} alt={alt} className={cn('w-[150px] mx-auto',className)} />
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
