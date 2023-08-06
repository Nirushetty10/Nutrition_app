import React from 'react'
import Slider from '../Components/Slider/Slider'
import Stats from '../Components/Stats/Stats'
import Subscribe from '../Components/subscribe/Subscribe'
import Footer from '../Components/Footer/Footer'
import Cards from '../Components/Card/Card'
import ChooseUs from '../Components/CooseUs/ChooseUs'
import Reviews from '../Components/Reviews/Reviews'

const Home = () => {
  return (
    <div className='layout'>
      <Slider />
      <Stats />
      <Cards />
      <Reviews/>
      <ChooseUs />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default Home