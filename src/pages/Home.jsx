import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Title from "../components/Title";
import Content from "../components/Content";
import Card from "../components/Card";
import P1 from "../assets/p1.png";
import P2 from "../assets/p2.png";
import P3 from "../assets/p3.png";
import P4 from "../assets/p4.png";
import P5 from "../assets/p5.png";
import P6 from "../assets/p6.png";
import P7 from "../assets/p7.png";
import P8 from "../assets/p8.png";
import Testimonial from "../components/Testimonial";
import InputEmail from "../components/InputEmail";
import Nav from "../components/Nav";
import cn from "../lib/cn";
import Container from "../components/layer/Container";
import SectionPart from "../components/SectionPart";

const Home = () => {
  return (
    <div>
      <div className={cn("relative")}>
        <Nav className={" scale-95"} />
        <img
          src={P1}
          alt=""
          className={cn(
            "absolute top-0 right-0 -z-2 sm:scale-125 w-[35%] md:w-[50%] xl:w-[30%] "
          )}
        />
      </div>

      <SectionPart
        title={"Your Favourite Food Delivered Hot & Fresh"}
        txt={
          "Healthy switcher chefs do all the prep work, like peeling, chopping & marinating, so you can cook fresh food."
        }
        btn={"Order Now"}
        src={P4}
        alt={"Food"}
        display={"show"}
        className={"py-1"}
        sl1={"order1"}
        sl2={"order2"}
      />
      <div className={cn("")}>
        <div className={cn("absolute -z-1")}>
          <img src={P3} alt="" className={cn("w-28 md:w-[250px] ")} />
        </div>
        <SectionPart
          title={"Your Favourite Food Delivered Hot & Fresh"}
          txt={
            "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie duimagnis facilisis at fringilla quam."
          }
          txt2={
            "Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam."
          }
          btn={"Order Now"}
          src={P4}
          alt={"Food"}
          display={"hide"}
          className={"pb-5 pt-32"}
          sl1={"order3"}
          sl2={"order4"}
          title1={"about"}
        />
      </div>

      <SectionPart
        title={"How It Works"}
        txt={
          "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui  magnis facilisis at fringilla quam."
        }
        display={"hide"}
        className={"pb-5 pt-32 flex justify-center items-center mx-auto w-[300px] md:w-[450px] "}
        sl1={"order5"}
        title1={"Work"}
        displayMe={"hidden"}
        d={"block"}
      />
      <Container>
        <div className={cn(" flex flex-col xl:flex-row items-center justify-center gap-10 py-22")}>
          <Card src={P5} title={'Pick Meals'} des={'Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.'} />
          <Card src={P5} title={'Pick Meals'} des={'Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.'} />
          <Card src={P5} title={'Pick Meals'} des={'Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.'} />
        </div>
      </Container>

      <div className={cn("review ")}>
      <SectionPart
        title={"What They Are Saying"}
        txt={
          "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui  magnis facilisis at fringilla quam."
        }
        display={"hide"}
        className={"pb-5 pt-32 mx-auto "}
        sl1={"order5"}
        title1={"Testimonial"}
        displayMe={"hidden"}
        d={"block"}
      />
        <Container className={'pb-10'}>
          <Testimonial
            src={P8}
            stars={5}
            rName={"John Doe"}
            txt={
              "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam."
            }
            className={'w-[300px]  mx-auto md:w-[650px]'}
          />
        </Container>
      </div>

      <Container>
        <Header header={'Have Question In Mind? Let Us Help You'} className={'w-[320px]  mx-auto text-center md:w-[700px] '}/>
        <InputEmail/>
      </Container>
      
    </div>
  );
};

export default Home;
