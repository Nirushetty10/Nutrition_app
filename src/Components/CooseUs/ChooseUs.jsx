import React from "react";
import './ChooseUs.scss'

const chooseData = [
  {
    icon : "fa-solid fa-user-doctor fa-2xl",
    category: "Specialized Doctors",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatibus tempore minus nemo molestias, id soluta. Quos voluptate ratione ducimus."
  },
  {
    icon:"fa-solid fa-kitchen-set fa-2xl",
    category: "Health Diet Plan",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatibus tempore minus nemo molestias, id soluta. Quos voluptate ratione ducimus.",
  },
  {
    icon :"fa-solid fa-indian-rupee-sign fa-2xl",
    category: "At Affordable Prices",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatibus tempore minus nemo molestias, id soluta. Quos voluptate ratione ducimus.",
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