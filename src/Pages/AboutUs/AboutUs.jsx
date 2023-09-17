import React, { useEffect } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import "./AboutUs.scss"
import aboutGif from "../../images/Healthy Eating to meet.gif"
import why_chooseus from "../../images/why_chooseus_image.jpg"
const AboutUs = () => {
  useEffect(()=> {
    window.scrollTo(0,0)
  })
  return (
    <>
      <NavBar />
      <div className="about_container">
        <div className="left_about">
          <img src={aboutGif} alt="about_gif" />
        </div>
        <div className="right_about">
          <h2>About us</h2>
          <h1>NutriDiet</h1>
          <p>
            At <strong className="strName">NutriDiet</strong>, we understand the
            critical role that nutrition plays in achieving athletic excellence.
            Our team is passionate about helping athletes like you reach new
            heights, and our approach is rooted in science, expertise, and
            personalization. With a dedicated team of certified sport
            nutritionists, we're here to guide you through every step of your
            nutritional journey.
          </p>
        </div>
      </div>
      <div className="chooseus_container">
        <div className="chooseus_childs">
          <h1>
            WHY <br />
            CHOOSE US!
          </h1>
          <p>
            The main reason to choose NutriDiet is our focus on giving the most
            effective solution with our approach is rooted in science,
            expertise, and personalization. With a dedicated team of certified
            sport nutritionists
          </p>
          <button type="button" className="first_button">Contact Us</button>
          
        </div>
        <div className="chooseus_childs">
          <img src={why_chooseus} alt="chooseus-iamge" />
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default AboutUs