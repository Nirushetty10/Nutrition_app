import React from "react";
import './ChooseUs.scss'

const chooseData = [
  {
    icon : "fa-solid fa-user-doctor fa-2xl",
    category:"Personalized Weekly Diet Charts",
    content: "Specialized Doctors",
  },
  {
    icon:"fa-solid fa-kitchen-set fa-2xl",
    category:"Premium Consultations with Certified Sport Nutritionists",
    content: "Health Diet Plan",
  },
  {
    icon :"fa-solid fa-indian-rupee-sign fa-2xl",
    category:"Fitness-Focused Meal Plans",
    content: "At Affordable Prices",
  },
  {
    icon :"fa-solid fa-indian-rupee-sign fa-2xl",
    category:"Continuous Support for Your Health Goals",
    content: "At Affordable Prices",
  },
];
const ChooseUs = () => {
  return (
    <div className="choose_container">
      <div className="choose_content">
        <div className="choose_header">
          <h1>Why Choose Us</h1>
        </div>
        <div className="choose_cards">
          {
            chooseData.map((data) => {
                return <div className="choose_cards_lists">
                 <i class={data.icon}></i>
                  <h2>{data.category}</h2>
                  <p>{data.content}</p>
                </div>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;