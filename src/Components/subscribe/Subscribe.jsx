import "./subscribe.scss";
import RssFeedIcon from '@mui/icons-material/RssFeed';

const Subscribe = () => {
  return (
    <div className="subscribe-sec">
        <img src="https://s3-alpha-sig.figma.com/img/2b0f/1871/d447fb62715bf5abc8937cd22817b9e8?Expires=1691971200&Signature=LBF68J1mLVwXksQKUp-7HWlerP3BI~wUz-4kSPc4hVA2QXfR6vIIj9NneOf5bCbGgBEzWqgTQy84-MjUBeRsXnVv5hQAIxp-3m-uQLIATnHydqyz5e30jj5hcJrhUVDSCuWv8KPgNBKX0cGDmtjt6p6hBZpR3sxuyTm0oTJ0c~7u~EiadmekpFoLqtVwuFpjGoiLjBLrzPdwgKRw8PBoejjx6BN7W0RaW36WzNlWSg7NqF-M4~cD5Sy4TI3x9VXHM0pHoq3mBibH852-BJfwm6w~i2TxMt1i7JEUylEJLrpmAjoxxsDFmtjoyjghNZeWT2dob~SLmmuDjiGPfJvNrg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
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