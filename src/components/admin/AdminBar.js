import React from "react";
// import "./Sidebar.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Button, Icon } from "@mui/material";
import SentimentSatisfiedRoundedIcon from "@mui/icons-material/SentimentSatisfiedRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import { useDispatch, useSelector } from "react-redux";
import ConnectWithoutContactTwoToneIcon from "@mui/icons-material/ConnectWithoutContactTwoTone";
import { useNavigate } from "react-router-dom";
import { openModal } from '../../state/reducers/feeds/addpost';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
function AdminBar() {
  let username = useSelector((state) => state.userAuth.userData.user.username);
  const isopen = useSelector((state) => state.modal.isOpen);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOpen = () =>{
    console.log("worked");
    dispatch(openModal(true))
    
  }

  return (
    <>
      <div className="sidebar">
        <Button
          onClick={() => {
            navigate("/admin/dashboard");
          }}
          variant="outlined"
          className="sidebarbtn"
        >
          <DashboardIcon /> Dashboard
        </Button>

        <Button
          variant="outlined"
          onClick={() => {
            navigate("/admin/usermanagement");
          }}
          className="sidebarbtn"
        >
          <PeopleIcon /> User Management
        </Button>
        {/* <Button
        onClick={() => {
          navigate("/admin/notifications"); 
        }}
        variant="outlined"
          className="sidebarbtn"
        >
          <NotificationAddIcon />
          Notifications
        </Button> */}
        <Button
          variant="outlined"
          onClick={() => {
            navigate("/admin/controls");
          }}
          className="sidebarbtn"
        >
          <AdminPanelSettingsIcon /> Controls
        </Button>
        {/* <Button
          onClick={() => {
            navigate(`/${username}`);
          }}
          variant="outlined"
          className="sidebarbtn"
        >
          <SentimentSatisfiedRoundedIcon />
          Profile
        </Button> */}

      </div>
      {/* <Mobilebar /> */}
    </>
  );
}

export default AdminBar;
