import React from "react";
import "./Sidebar.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Button, Icon } from "@mui/material";
import SentimentSatisfiedRoundedIcon from "@mui/icons-material/SentimentSatisfiedRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import { useDispatch } from "react-redux";
import ConnectWithoutContactTwoToneIcon from "@mui/icons-material/ConnectWithoutContactTwoTone";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

function Mobilebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function logout() {
    dispatch({
      type: "logout",
    });
  }
  return (
    <div className="mobile_screen">
     <Row>
         <Col sx ={2}>
         <Button
        onClick={() => {
          navigate("/home");
        }}
        variant="outlined"
        
      >
        <HomeRoundedIcon />
      </Button>
      <Button variant="outlined" >
        <ConnectWithoutContactTwoToneIcon />
      </Button>
      <Button
        onClick={() => {
          navigate("/questions");
        }}
        variant="outlined"
       
      >
        <QuizRoundedIcon />
  
      </Button>
      <Button variant="outlined" >
        <SendRoundedIcon />
      </Button>
      <Button variant="outlined" >
        <SentimentSatisfiedRoundedIcon />
      </Button>
         </Col>
     </Row>
    </div>
  );
}

export default Mobilebar;
