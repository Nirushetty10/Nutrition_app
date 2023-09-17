import React, { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import "./Services.scss";
import CheckIcon from '@mui/icons-material/Check';

const data = [ 
  {
    id : 1,
    planType : "Basic",
    desc: "The essential to get your team up and running",
    price : 500,
    category : "",
    servicesDesc : ["Personalized Weekly Diet Charts","Location-Based Recommendations","BMI and Health Condition Considerations","Delicious and Nutrient-Packed Meal Plans","Nutritional Tips for Athletes"]
  },
  {
    id : 2,
    planType : "Premium",
    desc: "Powerfull tools to transform the way your team works",
    price : 800,
    category : "Recommended",
    servicesDesc : ["All Base Plan Features","Consultations with Certified Sport Nutritionists","One-on-One Guidance for Optimal Results","Tailored Diet Adjustments","Progress Monitoring and Feedback"]
  },
  {
    id : 3,
    planType : "Pro",
    desc : "All of our features with advanced security,support and controls",
    price : 1200,
    category : "Best seller",
    servicesDesc : ["All Base Plan Features","Consultations with Certified Sport Nutritionists","One-on-One Guidance for Optimal Results","Tailored Diet Adjustments","Progress Monitoring and Feedback"]
  }
]

const Services = () => {

  useEffect(()=> {
    window.scrollTo(0,0)
  })
  return (
    <div className="service_layout">
      <NavBar />
      <div className="services_content">
        <div className="services_background">
          <h1>Our Features & Services</h1>
          <div className="services_desc">
          <p>
            We believe in the power of personalized nutrition to enhance your
            athletic performance. Choose the plan that best suits your needs and
            let us be your partner in achieving greatness!
          </p>
          </div>
        </div>
        <div className="services_cardSection">
            {data.map(item => {
              return <div className="services_card" key={item.id}>
                 <div className="card_category">
                  <p>{item.category}</p>
                 </div>
                  <h1>{item.planType}</h1>
                  <p className="card_desc">{item.desc}</p>
                  <div className="card_rate">
                    <p>₹</p>
                    <h2>{item.price}</h2>
                    <div className="rate_desc">
                    <p className="rate_desc">Per user</p>
                    <p className="rate_desc">Per Month</p>
                    </div>
                  </div>
                  <button type="button">Get Started</button>
                  <div className="servicesDesc">
                     {item.servicesDesc.map((desc,index) => {
                    return <div className="desc_items" key={index}>
                      <div className="icon"><CheckIcon style={{"fontSize" : "1.2rem"}}/></div>
                       <h5>{desc}</h5>
                      </div>
                    })}
                  </div>
              </div>
            })}
        </div>
      </div>
    </div>
  );
};

export default Services;
