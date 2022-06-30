import React from "react";
import { Spinner } from "react-bootstrap";
import { Box, Grid } from "@mui/material";
import SideBar from "../../components/homepage/SideBar";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Button, Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UserTable from "../../components/admin/UserTable";
import MyProfile from "../../components/myprofile/MyProfile";
function ProfilePage() {


  let username =  useSelector((state) => state.userAuth.userData.user.username) 
  const navigate = useNavigate();
  const dispatch = useDispatch();


  function logout() {
    dispatch({
      type: "logout",
    });
    navigate("/");
  }

  return (
    <div className="homepage">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={0} md={3}>
            <SideBar />
          </Grid>
 {/* <Button
          style={{ backgroundColeor: "#1c9bf0",
          color: "white",
          fontWeight: '700'}} 
          variant="contained"
          onClick={logout}
        >
          Logout out
        </Button> */}
          <Grid item xs={12} md={9}>
            <MyProfile/>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}





              {/* <Spinner animation="border" variant="info" /> */}

              
export default ProfilePage;
