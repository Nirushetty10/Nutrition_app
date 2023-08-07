import NavBar from "../Components/NavBar/NavBar";
import "./Auth.scss";
import bgImage from "../images/pexels/dan-gold-4_jhDO54BYg-unsplash.jpg";
import Login from "../Components/Auth/Login";
import Signup from "../Components/Auth/Signup";
import { useState } from "react";

const Auth = () => {
  const [signUpVisible, setSignupVisible] = useState(true);

  const handleStateChange = (val) => {
    setSignupVisible(val);
  }
  return (
    <div className="auth-layout">
      <NavBar type="auth" />
      <div className="auth-container">
        <div className="auth-title">Welcome to NutriDiet</div>
        <div className="auth-box-sec">
          <div className="authBox-top-sec">
            <button
              className="auth_btn"
              style={{
                backgroundColor: !signUpVisible && "#ff4500",
                color: !signUpVisible && "#fff",
              }}
              onClick={() => setSignupVisible(false)}
            >
              Login
            </button>
            <button
              className="auth_btn"
              style={{
                backgroundColor: signUpVisible && "#ff4500",
                color: signUpVisible && "#fff",
              }}
              onClick={() => setSignupVisible(true)}
            >
              SignUp
            </button>
          </div>
          {!signUpVisible && <Login signupStateHandler={handleStateChange}/>}
          {signUpVisible && <Signup signupStateHandler={handleStateChange}/>}
        </div>
      </div>
    </div>
  );
};

export default Auth;
