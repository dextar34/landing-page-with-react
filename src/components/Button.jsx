import React from "react";
import cn from "../lib/cn";
import { FaArrowRight } from "react-icons/fa6";

const Button = ({ text, bgColor, icon, className }) => {
  const bgClasses = {
    white: "bg-black text-white hover:bg-white hover:text-black",
    orange: "bg-[#FE9E0D] text-black hover:text-white  ",
    sub: "bg-[#FE9E0D] text-white ",
  };

  const divShow = {
    show: "block", 
    hide: "hidden", 
  }


  return (
    <button
      className={cn(
        "py-2 px-3 md:py-[20px] md:px-[35px] flex justify-between items-center gap-5 rounded-[100px] group transition-all duration-300 ",
        bgClasses[bgColor],
        className,
       
      )}
    >
      <div className={cn('text-sm md:text-2xl font-bold ')}>{text}</div>
      <div className={cn( "transition-transform group-hover:translate-x-3 w-10",divShow[icon])}><FaArrowRight className={cn("md:text-2xl",)} />
      </div>
    </button>
  );
};

export default Button;
