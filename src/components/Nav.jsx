import React from 'react'
import { Link } from 'react-router-dom'
import Container from './layer/Container'
import cn from '../lib/cn';

const navData = [
  {
    item: "home",
    path: "/",
  },
  {
    item: "about us",
    path: "/about",
  },
];

const Nav = () => {
  return (
    <nav>
      <Container>
          <ul className={cn('flex justify-around')}>
            {navData.map((data,index)=>(
              <Link to={data.path}>
              <li className={cn('mobile capitalize bg-transparent hover:bg-emerald-500 rounded my-2 px-4 py-8 transition-all duration-300 hover:font-semibold',
                'pc',
              )} 
              key={index}>
                {data.item}
                </li>
              </Link>
            ))}
          </ul>
      </Container>
    </nav>
  )
}

export default Nav
