import React from 'react'
import Button from '../components/Button'
import Header from '../components/Header'
import Title from '../components/Title'
import Content from '../components/Content'
import Card from '../components/Card'
import One from "../assets/cardOne.png";
import Testimonial from '../components/Testimonial'
import InputEmail from '../components/InputEmail'

const Home = () => {
  return (
    <div>
      <h1 className='bg-[#FE9E0D]'>Home</h1>
      <Button text={'lorem10'} bgColor={'orange'} icon={'hid'}/>
      <Button text={'lorem10'} bgColor={'white'} icon={'hide'}/>
      <Title title={'about'} />
      <Header  header={'Your Favourite Food Delivered Hot & Fresh'}/>
      <Content>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos inventore ipsam ipsa autem quibusdam nihil omnis, sit labore deserunt ipsum quae eveniet a atque pariatur? Rerum corrupti voluptatum nam sapiente. </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos inventore ipsam ipsa autem quibusdam nihil omnis, sit labore deserunt ipsum quae eveniet a atque pariatur? Rerum corrupti voluptatum nam sapiente. </p>
      </Content>

      <Card src={One} title={'Pick Meals'} des={'Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.'}/>
      <Testimonial stars={5} txt={'Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.'} rName={'sharik'} src={One}/>
      <InputEmail/>

    </div>
  )
}

export default Home
