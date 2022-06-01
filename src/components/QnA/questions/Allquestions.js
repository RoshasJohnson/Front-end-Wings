import React, { useEffect } from "react";
import "./Allquestion.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { questionFetch } from "../../../state/reducers/questions/questionReducer";
import { Container, Typography } from "@mui/material";
import Topicswise from "./Topicswise";

function Allquestions() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.fetchQuestions.AllQuesitons);

  useEffect(() => {
    dispatch(questionFetch());
    console.log("Question page");
  }, []);
  return (
    <div className="qnas">
      {questions.map((question,key)=>
      <div className="question-show">
        <div className="">
          <Link  to={ `${question.question_title}` }state={{ data: question }}>{question.question_title  }</Link>
        </div>
      </div>
        )}  
    </div>
  );
}

export default Allquestions;
