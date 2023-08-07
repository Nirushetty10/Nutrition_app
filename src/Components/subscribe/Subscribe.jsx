import "./subscribe.scss";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import image from "../../images/croped.jpg"

const Subscribe = () => {
  return (
    <div className="subscribe-sec">
        <img src={image} alt="" />
        <div className="content-Box">
           <h1>Want to know more?!</h1>
           <div className="inputSec">
            <input type="email" name="email" placeholder="Type your email address"/>
            <button><RssFeedIcon /> Subscribe</button>
           </div>
        </div>
        
    </div>
  )
}

export default Subscribe;