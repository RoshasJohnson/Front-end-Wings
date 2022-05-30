import React, { useEffect } from "react";
import "./Allquestion.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { questionFetch } from "../../../state/reducers/questions/questionReducer";
import { Container, Typography } from "@mui/material";

function Allquestions() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.fetchQuestions.AllQuesitons);

  useEffect(() => {
    dispatch(questionFetch());
    console.log("Question page");
  }, []);
  return (
    <div className="all-questions">
      {questions.map((question)=>
      <div className="question-show">
      
        <Row>
          <Col xs={2}>
            <p>0 answers</p>
          </Col>
          <Col xs={5}>
            <p>asked:  <Link to ="questions/"> {question.questioner.first_name}</Link>   </p>
          </Col>
        </Row>
        <div className="">
          <Link to={ `${question.question_title}` }state={{ data: question }}>{question.question_title  }</Link>
        </div>
      </div>
        )}  
    </div>
  );
}

export default Allquestions;
