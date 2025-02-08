import React from "react";
import cn from "../lib/cn";
import Container from "./layer/Container";

const Footer = () => {
  return (
    <footer className={cn("py-20 bg-gray-100")}> 
      <Container>
        <div className={cn("flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left")}>
          {/* Logo Section */}
          <div className={cn("mb-10 md:mb-0")}>
            <h1 className={cn("font-kufi text-gray-800 font-medium text-4xl md:text-5xl")}>FOODIE</h1>
            <div className={cn("flex justify-center md:justify-start space-x-4 pt-4 text-lg")}>
              <span className={cn("cursor-pointer hover:text-gray-600")}>f</span>
              <span className={cn("cursor-pointer hover:text-gray-600")}>t</span>
              <span className={cn("cursor-pointer hover:text-gray-600")}>i</span>
            </div>
          </div>
          
          {/* Contact & Policies */}
          <div className={cn("flex flex-col md:flex-row gap-8 md:gap-20 text-gray-600 font-semibold")}>
            <div className={cn("text-center md:text-left")}>
              <p className={cn("py-2")}>244-5333-7783</p>
              <p className={cn("py-2")}>hello@food.com</p>
              <p className={cn("py-2")}>contact@food.com</p>
            </div>
            <div className={cn("text-center md:text-left")}>
              <p className={cn("py-2 cursor-pointer hover:underline")}>Terms & Conditions</p>
              <p className={cn("py-2 cursor-pointer hover:underline")}>Privacy Policy</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
