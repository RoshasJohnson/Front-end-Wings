import React, { useEffect } from "react";
import "./Allquestion.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Col, Row, Spinner } from "react-bootstrap";
import Card from "@mui/material/Card";
import { useDispatch, useSelector } from "react-redux";
import { questionFetch } from "../../../state/reducers/questions/questionReducer";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Topicswise from "./Topicswise";


function Allquestions() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
// =====================================
  const questions = useSelector((state) => state.fetchQuestions.AllQuesitons);
  const loading =  useSelector((state) => state.fetchQuestions.loading)
  // =====================================

  useEffect(() => {
    dispatch(questionFetch());
    console.log("Question page");
  }, []);
  // =====================================
  return (
  
    <div className="qnas">
        {loading &&  <Spinner variant="info" animation="border" />}
      {questions.map((question, key) => {
        return (
          <div style={{marginTop:"2%"}}>
            <Row>
              <Card justify="space-between" style={{ height: "fit-content" }}>
                <CardContent>
                  <Typography variant="h6" color="text.dark">
                    <Link
                      to={`${question.question_title}`}
                      state={{ data: question }}
                    >
                      {question.question_title}
                    </Link>
                  </Typography>
                </CardContent>
              </Card>
            </Row>
          </div>
        );
      })}
    </div>
  );
}

export default Allquestions;
