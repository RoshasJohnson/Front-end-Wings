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
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";


function Mobilebar() {
  let username = "";
  console.log(username);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function logout() {
    dispatch({
      type: "logout",
    });
  }
  return (
    <div className="mobile_screen">
      <BottomNavigation
        sx={{ width: 500 }}
        value={value}
        onChange={handleChange}
        style ={{background:"white"
      ,width:"100%"}}
      >
        <BottomNavigationAction
          label="home"
          value="home"
          style={{color:"black"}}
          onClick={() => {
            navigate("/home");
          }}
          icon={<HomeRoundedIcon />}
        />
        <BottomNavigationAction
          label="expore"
          value="explore"
          
         style={{color:"black"}}
          onClick={() => {
            navigate("/explore");
          }}
          icon={<ConnectWithoutContactTwoToneIcon />}
        />
        <BottomNavigationAction
          label="Question"
          value="Question"
          style={{color:"black"}}
          onClick={() => {
            navigate("/questions");
          }}
          icon={<QuizRoundedIcon />}
        />
        <BottomNavigationAction
         onClick={() => {
          navigate("/message");
        }}
          label="Chats"
          value="Chats"
          style={{color:"black"}}
          icon={<SendRoundedIcon />}
        />
         <BottomNavigationAction
          label="Me"
          value="Me"
          style={{color:"black"}}
          onClick={() => {
            navigate(`/${username}`);
          }}
          icon={<SentimentSatisfiedRoundedIcon />}
        />
      </BottomNavigation>
    </div>
  );
}

export default Mobilebar;
