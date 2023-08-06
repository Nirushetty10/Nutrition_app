import "./Login.scss";

const Login = (props) => {
  return (
    <div className="login_container">
       <input type="email" className="login_input" placeholder="Email"/>
       <div className="login_email__error">*required</div>
       <input type="password" className="login_input" placeholder="Password"/>
       <div className="login_password__error">*required</div>
       <button type="button" className="login_button">LOGIN</button>
       <p className="login_bottom_info">Don't have account? <span className="login_info_span" onClick={()=> props.signupStateHandler(true)}>Sign Up</span></p>
    </div>
  )
}

export default Login;