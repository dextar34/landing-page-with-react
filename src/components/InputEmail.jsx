import React from "react";
import cn from "../lib/cn";
import Button from "./Button";

const InputEmail = () => {
  return (
    <div className={cn("bg-white rounded-[100px] p-5 w-[300px] md:w-[600px] xl:w-[950px] flex justify-between mx-auto my-10  ")}>
      <input
        className={cn("text-[#8D8D8D] text-sm md:text-3xl font-medium mx-12 outline-none w-full")}
        type="email"
        name="email"
        id="email"
        placeholder="yourmail@gmail.com"
      />
      <Button icon={'hide'} bgColor={'sub'} text={'Submit'}/>
    </div>
  );
};

export default InputEmail;
