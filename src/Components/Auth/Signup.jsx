import "./Signup.scss";

const Signup = (props) => {
  return (
    <div className="signup_container">
        <input type="text" className="signup_input" placeholder="Full Name"/>
       <div className="signup_name__error">*required</div>
       <input type="email" className="signup_input" placeholder="Email"/>
       <div className="signup_email__error">*required</div>
       <input type="password" className="signup_input" placeholder="Password"/>
       <div className="signup_password__error">*required</div>
       <button type="button" className="signup_button">SIGNUP</button>
       <p className="signup_bottom_info">Already have account? <span className="signup_info_span" onClick={()=> props.signupStateHandler(false)}>Log In</span></p>
    </div>
  )
}

export default Signup;