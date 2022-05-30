import Button from '@mui/material/Button';
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SideBar from "../../homepage/SideBar";
import Answers from '../answers/Answers';
import Allquestions from "./Allquestions";

function Question() {
  return (
    <div className="homepage">
      <Row>
        <Col xs={2}>
          <SideBar />
        </Col>
        <Col xs={8}>
          <Allquestions />
          
        </Col>
        <Col  xs = {1} style ={{width:"fit-content"}} >
          <div>
           <Button  style={{backgroundColor:"#ffce00",color:"black"}} variant="contained">Ask Question</Button>
          </div>
        </Col>
      
      </Row>
    </div>
  );
}

export default Question;
