import React from "react";
import { Spinner } from "react-bootstrap";
import { Box, Grid } from "@mui/material";
import SideBar from "../../components/homepage/SideBar";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Button, Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";
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

          <Row style={{ marginTop: "10%" }}>
            <Col>
            <Button
          style={{ backgroundColeor: "#1c9bf0",
          color: "white",
          fontWeight: '700'}} 
          variant="contained"
          onClick={logout}
        >
          Logout out
        </Button>
              <Spinner animation="border" variant="info" />
            </Col>
          </Row>
        </Grid>
      </Box>
    </div>
  );
}

export default ProfilePage;
