import { useState } from "react";
import "./Signup.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = (props) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameValid, setFirstNameVaid] = useState(true);
  const [firstNameError, setFirstNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);
  const [passwordError, setPasswordError] = useState("");

  const isFirstNameValid = () => {
    if (firstName.trim().length === 0) {
      setFirstNameError("*required");
      setFirstNameVaid(false);
      return false;
    } else if (firstName.length < 3 || firstName.length > 12) {
      setFirstNameError(
        "First name should be minimum 3 and maximum 12 character"
      );
      setFirstNameVaid(false);
      return false;
    } else if (!/^[A-Za-z]+$/.test(firstName)) {
      setFirstNameError("First name should contain only characters.");
      setFirstNameVaid(false);
      return false;
    }
    return true;
  };

  const isEmailValid = () => {
    if (email.trim().length === 0) {
      setEmailError("*required");
      setEmailValid(false);
      return false;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      setEmailError("Invalid email address");
      setEmailValid(false);
      return false;
    }
    return true;
  };

  const isPasswordValid = () => {
    if (password.trim().length === 0) {
      setPasswordError("*required");
      setPasswordValid(false);
      return false;
    } else if (
      !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(password)
    ) {
      setPasswordError(
        "Invalid password. Please use at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character."
      );
      setPasswordValid(false);
      return false;
    }
    return true;
  };

  const handleFirstName = (e) => {
    setFirstNameError("");
    setFirstNameVaid(true);
    setFirstName(e.target.value);
  };

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
    if (isFirstNameValid() && isEmailValid() && isPasswordValid()) {
      const credentials = {
        fullname: firstName,
        email,
        password,
      };
      try {
        const response = await axios.post(
          "http://localhost:4001/api/auth/register",
          credentials
        );
        if (response.status === 200) {
          props.onSignup();
        }
      } catch (error) {
        toast.error(error.response.data);
      }
    }
  };

  return (
    <div className="signup_container">
      <input
        type="text"
        className="signup_input"
        style={{ borderColor: `${firstNameValid ? "#555" : "red"}` }}
        placeholder="Full Name"
        value={firstName}
        onChange={handleFirstName}
      />
      <div className="signup_name__error">{firstNameError}</div>
      <input
        type="email"
        className="signup_input"
        style={{ borderColor: `${emailValid ? "#555" : "red"}` }}
        placeholder="Email"
        value={email}
        onChange={handleEmail}
      />
      <div className="signup_email__error">{emailError}</div>
      <input
        type="password"
        className="signup_input"
        style={{ borderColor: `${passwordValid ? "#555" : "red"}` }}
        placeholder="Password"
        value={password}
        onChange={handlePassword}
      />
      <div className="signup_password__error">{passwordError}</div>
      <button type="button" className="signup_button" onClick={handleSubmit}>
        SIGNUP
      </button>
      <p className="signup_bottom_info">
        Already have account?{" "}
        <span className="signup_info_span" onClick={handleSubmit}>
          Log In
        </span>
      </p>
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
  );
};

export default Signup;
