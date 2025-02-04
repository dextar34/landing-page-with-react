import React from "react";
import cn from "../lib/cn";
import Content from "./Content";
import { MdOutlineStar } from "react-icons/md";

const Testimonial = ({ stars = 1, src, alt, rName, txt }) => {
  const starArray = new Array(stars).fill(null);
  return (
    <div
      className={cn(
        " flex flex-col justify-center items-center gap-8 p-2 bg-white rounded-4xl mx-2"
      )}
    >
      <div className={cn("img flex items-center justify-center")}>
        <img src={src} alt={alt} className={cn("w-[120px]")} />
      </div>
      <Content>
        <p className={cn("text-center w-[250px] md:w-[650px]")}>{txt}</p>
      </Content>
      <div className={cn("review w-[250px] flex justify-between text-4xl text-amber-300")}>
        {starArray.map((_, index) => (
          <MdOutlineStar key={index} />
        ))}
      </div>
      <div
        className={cn(
          "name text-center text-[#1C1C1C] font-semibold text-3xl capitalize"
        )}
      >
        {rName}
      </div>
    </div>
  );
};

export default Testimonial;
