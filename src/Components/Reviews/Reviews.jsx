import React from "react";
import { useState } from "react";
import "./Reviews.scss";
import review1 from "../../images/review-1.jpg";
import review2 from "../../images/review-2.jpg";
import review3 from "../../images/review-3.jpg";
import review4 from "../../images/review-4.jpg";

const data = [
  {
    imageSrc: review2,
    name: "Review-1",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, tenetur? Ipsa laboriosam dolorem in officiis totam laudantium nesciunt. Assumenda, mollitia! Distinctio accusantium nostrum, ratione quas tempora saepe iste expedita doloremque!",
  },
  {
    imageSrc: review1,
    name: "Review-2",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, tenetur? Ipsa laboriosam dolorem in officiis totam laudantium nesciunt. Assumenda, mollitia! Distinctio accusantium nostrum, ratione quas tempora saepe iste expedita doloremque!",
  },
  {
    imageSrc: review3,
    name: "Review-3",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, tenetur? Ipsa laboriosam dolorem in officiis totam laudantium nesciunt. Assumenda, mollitia! Distinctio accusantium nostrum, ratione quas tempora saepe iste expedita doloremque!",
  },
  {
    imageSrc: review4,
    name: "Review-4",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, tenetur? Ipsa laboriosam dolorem in officiis totam laudantium nesciunt. Assumenda, mollitia! Distinctio accusantium nostrum, ratione quas tempora saepe iste expedita doloremque!",
  },
];
const Reviews = () => {
  const [index, setIndex] = useState(0);

  const handleRightArrow = () => {
    setIndex(index < 3 ? index + 1 : 0);
  };
  const handleLeftArrow = () => {
    setIndex(index > 0 ? index - 1 : 3);
  };

  return (
    <div className="sliderContainer">
      <div
        className="sliderImageContainer"
        style={{ transform: `translateX(-${index}00%)` }}
      >
        {data.map((element) => {
          return (
            <div className="slide_content">
              <div className="slide_left_container">
                <img src={element.imageSrc} alt="" />
              </div>
              <div className="slide_right_container">
                <i class="fa-solid fa-quote-left fa-2xl"></i>
                <i class="fa-solid fa-quote-right fa-2xl"></i>

                <div className="rating_icons_container">
                  <h1>{element.name}</h1>
                  <p>{element.review}</p>
                  <div>
                    <i class="fa-solid fa-star fa-lg"></i>
                    <i class="fa-solid fa-star fa-lg"></i>
                    <i class="fa-solid fa-star fa-lg"></i>
                    <i class="fa-solid fa-star fa-lg"></i>
                    <i class="fa-solid fa-star-half-stroke fa-lg"></i>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <i
        class="fa-solid fa-arrow-left fa-2xl fa-arrow"
        onClick={handleLeftArrow}
      ></i>
      <i
        class="fa-solid fa-arrow-right fa-2xl fa-arrow"
        onClick={handleRightArrow}
      ></i>
    </div>
  );
};

export default Reviews;