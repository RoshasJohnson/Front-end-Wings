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
      <Button
        onClick={() => {
          navigate("/home");
        }}
        variant="outlined"
        className="sidebarbtn"
      >
        <HomeRoundedIcon />
      </Button>
      <Button variant="outlined" className="sidebarbtn">
        <ConnectWithoutContactTwoToneIcon />
      </Button>
      <Button
        onClick={() => {
          navigate("/questions");
        }}
        variant="outlined"
        className="sidebarbtn"
      >
        <QuizRoundedIcon />
  
      </Button>
      <Button variant="outlined" className="sidebarbtn">
        <SendRoundedIcon />
      </Button>
      <Button variant="outlined" className="sidebarbtn">
        <SentimentSatisfiedRoundedIcon />
      </Button>
      <Button variant="outlined" onClick={logout} className="sidebar_wing">
     
      </Button>
    </div>
  );
}

export default Mobilebar;
