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
import Mobilebar from "./Mobilebar";


function SideBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function logout() {
    dispatch({
      type: "logout",
    });
  }
  return (
    <div>
    <div className="sidebar">
      <Button
        onClick={() => {
          navigate("/home");
        }}
        variant="outlined"
        className="sidebarbtn"
      >
        <HomeRoundedIcon /> Home
      </Button>
  
      <Button variant="outlined" className="sidebarbtn">
        <ConnectWithoutContactTwoToneIcon /> Explore
      </Button>
      <Button
        onClick={() => {
          navigate("/questions");
        }}
        variant="outlined"
        className="sidebarbtn"
      >
        <QuizRoundedIcon />
        Question Club
      </Button>
      <Button variant="outlined" className="sidebarbtn">
        <SendRoundedIcon /> Message
      </Button>
      <Button variant="outlined" className="sidebarbtn">
        <SentimentSatisfiedRoundedIcon />
        Profile
      </Button>
      <Button style={{backgroundColor:"#ffce00",color:"black"}} variant="contained" onClick={logout}>
        Logout out
      </Button>
    </div >
    </div>
  );
}

export default SideBar;
