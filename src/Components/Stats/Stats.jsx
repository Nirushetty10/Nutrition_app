import React from "react";
import "./Stats.scss";
import image from "../../images/pexels/pexels-anne-mccarthy-12480410.jpg";

let data = [{
  id: 1,
  image : image,
  counts : "1000+",
  title : "Sports Persons On Boarded"
},
{
  id: 2,
  image : image,
  counts : "1000+",
  title : "Sports Persons On Boarded"
},
{
  id: 3,
  image : image,
  counts : "1000+",
  title : "Sports Persons On Boarded"
},
{
  id: 4,
  image : image,
  counts : "1000+",
  title : "Sports Persons On Boarded"
}
]

const Stats = () => {
  return (
    <div className="stats_content__section">
      <div className="stats__background">
        <h1>Our Stats</h1>
        <div className="stats__content">
          {data.map(content => {
              return <div key={content.id} className="stats__content_card">
              <img src={content.image} alt="" />
              <h1>{content.counts}</h1>
              <p>{content.title}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
