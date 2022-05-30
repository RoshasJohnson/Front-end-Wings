import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Container, Form, Navbar } from "react-bootstrap";
import "./signpage.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../../state/reducers/auth/userauth";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.userAuth.error);
  const loginStatus = useSelector((state) => state.userAuth.loginStatus);
  const [details, setdetails] = useState({
    email: "",
    username: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
   dispatch(userRegister(details));
   if(loginStatus){
   navigate("/home")}
  };
  return (
    <div className="loginpage">
      {/* <Navbar bg="light">
        <Container>
          <Navbar.Brand style={{ color: "#FFCE00" }} href="">
            DuckClub
          </Navbar.Brand>
        </Container>
      </Navbar> */}

      <div className="login-box">
        <Form onSubmit={handleSubmit}>
          <h1>Sign up now</h1>
          <Form.Group onSubmit={""} className="" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) =>
                setdetails({ ...details, email: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={(e) =>
                setdetails({ ...details, username: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Enter  Password"
              onChange={(e) =>
                setdetails({ ...details, password: e.target.value })
              }
            />
            <p style={{color:"red"}}>{error}</p>
          </Form.Group>
          <Button className="mx-auto" variant="warning" type="submit">
            Sign up
          </Button>
        </Form>

        <Link to="/">
          <h6 className="already"> Already have an account ? sign in now</h6>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
