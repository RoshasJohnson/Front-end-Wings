import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SideBar from "../../components/homepage/SideBar";
import "../home/Homepage.css";
import FeedClub from "../../components/homepage/feeds/FeedClub";
import { Success } from "../../components/Alerts";

function HomePage() {
  const loginStatus = useSelector((state) => state.userAuth.loginStatus);
  const navigate = useNavigate();

  console.log(loginStatus, "++++++++++++++++++++++++++++++++++++++++++++++++");
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
      <Row>
        <Col xs ={2}>
          <SideBar />
          <Success/>
        </Col>
        <Col xs ={7}>
            <FeedClub/>
            <FeedClub/>
            <FeedClub/>
            <FeedClub/>
            <FeedClub/>
            <FeedClub/>
            <FeedClub/>
            <FeedClub/>
        </Col>
      </Row>
    </div>
  );
}

export default HomePage;
