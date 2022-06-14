import React, { useState, useEffect } from "react";
import "./Loginpage.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userVerify } from "../../state/reducers/auth/userauth";
import GoogleAuth from "./GoogleAuth";






function LoginPage() {
  
  const navigate = useNavigate();
  const loginStatus = useSelector((state) => state.userAuth.loginStatus);
  console.log(loginStatus,"loginstatsus");
  const error = useSelector((state) => state.userAuth.error);
  const [details, setdetails] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    if (details !== "") {
      dispatch(userVerify(details));
      if (loginStatus ==true) {
        navigate("/home");
      }
      
    }
  };

  useEffect(() => {
    console.log(loginStatus);
    if (loginStatus ==true) {
      navigate("/home");
    }
    
  }, [loginStatus, navigate]);

  return (
    <div className="loginpage">
      <form onSubmit={handleClick}>
        <h1>Login</h1>
        <div className="textbox">
          <input
            type="email"
            placeholder="Email"
            name=""
            onChange={(e) => setdetails({ ...details, email: e.target.value })}
          />
        </div>
        <div className="textbox">
          <input
            type="password"
            placeholder="Password"
            name=""
            onChange={(e) =>
              setdetails({ ...details, password: e.target.value })
            }
          />
        </div>
        <p style={{ color: "red" }}>{error}</p>
        <button type="submit" className="loginbtn">
          Sign In
        </button>
        <GoogleAuth/>
      </form>
      <div className="align-items-start">
        <Link  to ="register"> Create account</Link>
      </div>
    </div>
  );
}

export default LoginPage;
