import React, { useEffect, useState } from "react";
import "./Slider.scss";

import img1 from "../../images/1086262438_All types of Millets_ _xl-beta-v2-2-2.png";
import img2 from "../../images/11328967_Healthy vegetarian diet food for sport personaliti_xl-beta-v2-2-2.png";
import img3 from "../../images/1577263946_Healthy diet food for sport personalities both Veg_xl-beta-v2-2-2.png";
import img4 from "../../images/4135718553_Healthy diet food for sport personalities both Veg_xl-beta-v2-2-2.png";
import img5 from "../../images/718383224_Fruit juices & Milk _ _xl-beta-v2-2-2.png";
import img6 from "../../images/814917288_Healthy vegetarian diet food for sport personaliti_xl-beta-v2-2-2.png";
import NavBar from "../NavBar/NavBar";

const Slider = () => {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    let timer;
    timer = setInterval(() => {
      setImgIndex(imgIndex < 5 ? imgIndex + 1 : 0);
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, [imgIndex]);

  const barClickHandler = (e) => {
    if (e.target.id === "first_bar") setImgIndex(0);
    if (e.target.id === "second_bar") setImgIndex(1);
    if (e.target.id === "third_bar") setImgIndex(2);
    if (e.target.id === "fourth_bar") setImgIndex(3);
    if (e.target.id === "fifth_bar") setImgIndex(4);
    if (e.target.id === "sixth_bar") setImgIndex(5);
  };

  return (
    <div className="sliderContainer">
      <div className="nav">
        <NavBar />
      </div>
      <div
        className="sliderImageContainer"
        style={{ transform: `translateX(-${imgIndex}00%)` }}
      >
        <div className="slide">
          <img src={img1} alt="" />
        </div>
        <div className="slide">
          <img src={img2} alt="" />
        </div>
        <div className="slide">
          <img src={img3} alt="" />
        </div>
        <div className="slide">
          <img src={img4} alt="" />
        </div>
        <div className="slide">
          <img src={img5} alt="" />
        </div>
        <div className="slide">
          <img src={img6} alt="" />
        </div>
      </div>
      <div className="home_page__content">
        <div className="home_page__content__contents">
          <h1>Stay <span>Fit</span> and <span>Healthy</span> No Matter What</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="home_page__content__button">
          <button type="button" className="first_button">Take a Test</button>
          <button type="button" className="second_button">Give a Call</button>
        </div>
      </div>
      <div className="progressBar">
        <div
          className={`${imgIndex === 0 ? "activeBar" : "bar"}`}
          id="first_bar"
          onClick={barClickHandler}
        >
          {imgIndex === 0 && <div className="progress-fill"></div>}
        </div>
        <div
          className={`${imgIndex === 1 ? "activeBar" : "bar"}`}
          id="second_bar"
          onClick={barClickHandler}
        >
          {imgIndex === 1 && <div className="progress-fill"></div>}
        </div>
        <div
          className={`${imgIndex === 2 ? "activeBar" : "bar"}`}
          id="third_bar"
          onClick={barClickHandler}
        >
          {imgIndex === 2 && <div className="progress-fill"></div>}
        </div>
        <div
          className={`${imgIndex === 3 ? "activeBar" : "bar"}`}
          id="fourth_bar"
          onClick={barClickHandler}
        >
          {imgIndex === 3 && <div className="progress-fill"></div>}
        </div>
        <div
          className={`${imgIndex === 4 ? "activeBar" : "bar"}`}
          id="fifth_bar"
          onClick={barClickHandler}
        >
          {imgIndex === 4 && <div className="progress-fill"></div>}
        </div>
        <div
          className={`${imgIndex === 5 ? "activeBar" : "bar"}`}
          id="sixth_bar"
          onClick={barClickHandler}
        >
          {imgIndex === 5 && <div className="progress-fill"></div>}
        </div>
      </div>
    </div>
  );
};

export default Slider;
