import { useState } from "react";
import "./Login.scss";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);
  const [passwordError, setPasswordError] = useState("");

  const handleEmail = (e) => {
    setEmailValid(true);
    setEmailError("");
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPasswordError("");
    setPasswordValid(true);
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    if(email.trim().length === 0) {
      setEmailValid(false);
      setEmailError("*required");
      return;
    } else if (password.trim().length === 0) {
      setPasswordError("*required");
      setPasswordValid(false);
      return;
    }
      const credentials = {
        email,
        password,
      };
      try {
        const response = await axios.post(
          "http://localhost:4001/api/auth/login",
          credentials,
         { withCredentials : true}
        );
        const userData = await response.data;
        if (response.status === 200) {
          toast.success(userData);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      } catch (error) {
        toast.error(error.response.data);
      }
  };

  return (
    <div className="login_container">
       <input type="email" className="login_input" placeholder="Email" style={{ borderColor: `${emailValid ? "#555" : "red"}` }} value={email}
        onChange={handleEmail}/>
       <div className="login_email__error">{emailError}</div>
       <input type="password" className="login_input" placeholder="Password" value={password}
        onChange={handlePassword}/>
       <div className="login_password__error">{passwordError}</div>
       <button type="button" className="login_button" onClick={handleSubmit}>LOGIN</button>
       <p className="login_bottom_info">Don't have account? <span className="login_info_span" onClick={()=> props.signupStateHandler(true)}>Sign Up</span></p>
       <ToastContainer 
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
    </div>
  )
}

export default Login;