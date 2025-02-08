import React from "react";
import Container from "./layer/Container";
import Header from "./Header";
import Content from "./Content";
import Button from "./Button";
import cn from "../lib/cn";
import Title from "./Title";

const order1 = {
  order1:
    "txt order-2  flex flex-col justify-center items-center mx-2 md:w-1/2  md:order-none text-center md:text-left ",
  order2:
    "img   order-1 md:order-none flex justify-center md:block relative w-full md:w-auto -z-1",
  order3:
    "txt order-2   flex flex-col justify-center items-center mx-2 md:w-1/2  md:order-3 text-center md:text-left ",
  order4:
    "img   order-1 md:order-2 flex justify-center md:block relative w-full md:w-auto -z-1",
  order5:
    "txt    flex flex-col justify-center items-center mx-auto   text-center ",
};

const showMe = {
  block: "block",
  hidden: "hidden w-0",
  default: "hidden w-0",
};

const SectionPart = ({
  title,
  txt,
  btn,
  src,
  alt,
  display,
  className,
  sl1,
  sl2,
  title1,
  displayMe,
  d,
  txt2,
}) => {
  return (
    <div className={cn("", className)}>
      <Container className={cn("")}>
        <div
          className={cn(
            "heroSection flex flex-col md:flex-row justify-between gap-10 items-center md:pt-32 mx-4",
            showMe[d],
            showMe[displayMe]
          )}
        >
          {/* Text Section */}
          <div className={cn(order1[sl1], showMe[d])}>
            <Title title={title1} />
            <Header className={cn("pt-5 md:w-[550px]")} header={title} />
            <Content className={cn("py-12")}>
              <p>{txt}</p>
              <p className={cn("pt-8")}>{txt2}</p>
            </Content>
            <Button text={btn} bgColor={"orange"} icon={display} />
          </div>

          {/* Image Section */}
          <div className={cn("meme", order1[sl2])}>
            <img
              src={src}
              alt={alt}
              className={cn("w-[80%]  max-w-[400px] md:w-auto md:scale-110")}
            />
          </div>
        </div>
        {/* Text Section */}
        <div className={cn("  ", order1[sl1], showMe[d] || showMe.default)}>
          <Title title={title1} />
          <Header className={cn("pt-5 md:w-[350px]  xl:w-[550px] mx-auto")} header={title} />
          <Content className={cn("py-6 w-[300px] text-center xl:w-[800px] mx-auto")}>
            <p>{txt}</p>
          </Content>
        </div>
      </Container>
    </div>
  );
};

export default SectionPart;
