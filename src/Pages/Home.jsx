import React from 'react'
import Slider from '../Components/Slider/Slider'
import Stats from '../Components/Stats/Stats'
import Subscribe from '../Components/subscribe/Subscribe'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='layout'>
      <Slider />
      <Stats />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default Home