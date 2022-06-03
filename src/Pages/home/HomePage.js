import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SideBar from "../../components/homepage/SideBar";
import "../home/Homepage.css";
import FeedClub from "../../components/homepage/feeds/FeedClub";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function HomePage() {
  const loginStatus = useSelector((state) => state.userAuth.loginStatus);
  const navigate = useNavigate();
  useEffect(() => {
    if (loginStatus) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [loginStatus, navigate]);

  useEffect(() => {
    console.log("second useeffect ");
  }, []);

  return (
    <div className="homepage">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={0} md={3}>
            <SideBar />
          </Grid>
          <Grid item xs={12} md={8}>
            {" "}
            <FeedClub />
          </Grid>
          <Grid item xs={6} md={4}></Grid>
          <Grid item xs={6} md={8}></Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default HomePage;
