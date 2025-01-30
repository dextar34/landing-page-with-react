import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "./layer/Container";
import cn from "../lib/cn";
import ListItem from "./layer/ListItem";
import Button from "../components/Button";
import { TbGridDots } from "react-icons/tb";

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

const Nav = ({ className }) => {
  const [nav, setNav] = useState(false);
  const navRef = useRef(); // Reference for the navigation menu
  const location = useLocation(); // Get the current path

  const toggleMenu = () => {
    setNav(!nav); // Toggle menu state
  };

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        nav &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setNav(false); // Close the menu if clicked outside
      }
    };

    // Attach the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [nav]);

  return (
    <nav className={cn(" ", className)}>
      <Container className={cn(" py-14 ")}>
        <div className={cn("navItems flex justify-between items-center py-2")}>
          <div className={cn("logo")}>
            <Link to={"/"}>
              <h1
                className={cn("font-kufi text-[#FE9E0D] font-medium text-5xl")}
              >
                FOODIE
              </h1>
            </Link>
          </div>
          <div className={cn("menu flex justify-end items-center")}>
            {/* Desktop Menu */}
            <ul
              ref={navRef}
              className={cn(
                "xl:flex justify-end gap-10 hidden"
              )}
            >
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
            <Button
              bgColor={"white"}
              text={"Booking Now"}
              icon={"hide"}
              className={
                "ml-10 transition-all duration-300 ease-in-out scale-75 hover:scale-85 hidden md:block"
              }
            />
            {/* Mobile Menu Icon */}
            <div className={cn("xl:hidden mr-5 cursor-pointer")} onClick={toggleMenu}>
              <TbGridDots className={cn("scale-175")} />
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {nav && (
          <div className={cn("xl:hidden fixed top-1/2 translate-y-1/8 left-0  w-full h-full  bg-opacity-75 flex justify-end items-center z-50 ")}>
            <ul
              ref={navRef}
              className={cn("bg-white p-5 rounded-lg shadow-lg flex flex-col gap-2 text-center")}
            >
              {navData.map((data, index) => (
                <ListItem
                  key={index}
                  href={data.path}
                  children={data.item}
                  className={
                    "capitalize font-bold text-sm transition-all duration-300 ease-in-out hover:scale-110"
                  }
                  onClick={() => setNav(false)}
                />
              ))}
            </ul>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Nav;
