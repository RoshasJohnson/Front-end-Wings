import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import SideBar from "../../components/homepage/SideBar";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import { Col, Container, Row } from "react-bootstrap";

function Explore() {
  return (
    <div className="homepage">
      <Box sx={{ flexGrow: 1 }}>
      <Row>
          <Grid item xs={0} md={3}>
            <Col sm={3}>
              <SideBar />
            </Col>
          </Grid>
          <Grid item xs={12} md={8}>
            <Col sm={6}>
              <UserProfileCard />
            </Col>
          </Grid>
      </Row>
        </Box>
    </div>
  );
}

export default Explore;
