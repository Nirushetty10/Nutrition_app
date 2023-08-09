import React from "react";
import "./Cards.scss";

const doctorsData = [
  {
    id:1,
    name: "Cameron Williamson",
    speciality: "MBBS, CMS, MD",
    imageURL: "../src/images/doctor-1.jpg",
  },
  {
    id:2,
    name: "Lisa Johnson",
    speciality: "Nutrition, HSG, IGM",
    imageURL: "../src/images/doctor-2.jpg",
  },
  {
    id:3,
    name: "Jenny Wilson",
    speciality: "Cardio, MCH, MD",
    imageURL: "../src/images/doctor-3.jpg",
  },
];

const Cards = () =>{
  return (
    <div className="cards_content_section">
      <div className="cards_content_heading">
        <h1>Meet Our Super Powers</h1>
      </div>
      <div className="cards_content_card_container">
        {doctorsData.map((data) => {
          return <div className="cards_doctor_content">
            <img src={data.imageURL} alt="" />
            {/* <h3>{data.name}</h3>
            <p>{data.speciality}</p> */}
          </div>;
        })}
      </div>
    </div>
  );
}

export default Cards;
