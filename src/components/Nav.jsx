import React from "react";
import { Link } from "react-router-dom";
import Container from "./layer/Container";
import cn from "../lib/cn";
import ListItem from "./layer/ListItem";
import Button from '../components/Button'


const navData = [
  {
    item: "home",
    path: "/",
  },
  {
    item: "about us",
    path: "#about",
  },
  {
    item: "Testimonials",
    path: "#testimonials",
  },
  {
    item: "Contact",
    path: "#contact",
  },
];

const Nav = () => {
  return (
    <nav className={cn(" bg-red-700")}>
      <Container className={cn(' py-14 bg-emerald-500')}>
        <div className={cn("navItems flex justify-between items-center py-2")}>
          <div className={cn("logo")}>
            <Link to={'/'}>
            <h1 className={cn('font-kufi text-[#FE9E0D] font-medium text-5xl',)}>FOODIE</h1>
            </Link>
          </div>
          <div className={cn("menu flex justify-end items-center")}>
            <ul className={cn(" flex justify-end gap-10 ",
            )}>
              {navData.map((data, index) => (
                <ListItem
                  key={index}
                  href={data.path}
                  children={data.item}
                  className={
                    " capitalize font-bold text-xl transition-all duration-300 ease-in-out hover:scale-115" 
                  }
                />
              ))}
            </ul>
            <Button bgColor={'white'} text={'Booking Now'} icon={'hide'} className={'ml-10 transition-all duration-300 ease-in-out hover:scale-105'}/>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
