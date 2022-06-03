import React, { useEffect } from "react";
import "./Allquestion.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
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
  const questions = useSelector((state) => state.fetchQuestions.AllQuesitons);

  useEffect(() => {
    dispatch(questionFetch());
    console.log("Question page");
  }, []);
  return (
    <div className="qnas">
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
                {/* <p>s</p> */}
              </Card>
            </Row>
          </div>
        );
      })}
    </div>
  );
}

export default Allquestions;
