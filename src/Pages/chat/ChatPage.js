import React from 'react'
import { Spinner } from 'react-bootstrap'
import { Box, Grid } from "@mui/material";
import SideBar from "../../components/homepage/SideBar";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
import { Col, Container, Row } from "react-bootstrap";
function ChatPage() {
  return (
    <div className="homepage">
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={0} md={3}>
          <SideBar />
        </Grid>

        <Row style={{ marginTop: "10%" }}>
          <Col>
          <Spinner animation="border" variant="warning" />
          </Col>
        </Row>
      </Grid>
    </Box>
  </div>
  )
}

export default ChatPage