import React, { useEffect, useState } from "react";
import "../answers/answer.css";
import { Link, useLocation } from "react-router-dom";
import Moment from "moment";
import AddAnswer from "./AddAnswer";
import NavigationIcon from "@mui/icons-material/Navigation";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Col, Form, Row, Spinner } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import {
  answerFetch,
  setSuccess,
} from "../../../state/reducers/answers/AnswerReudcer";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import ReactTimeAgo from "react-time-ago";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Checkbox from "@mui/material/Checkbox";
import { AxiosAuth } from "../../../AxiosIns/AxiosAuth";
import axios from "../../../axios";
import parse from "html-react-parser";
import AlertMessage from "../../context/AlertMessage";
import AnswerControll from "./AnswerControll";
//===============================================

function Answers({}) {
  const dispatch = useDispatch();
  const answer = useSelector((state) => state.answers.setAnswer);
  const loading = useSelector((state) => state.answers.loading);
  const location = useLocation();
  const id = location.state.data.id;
  const qu_Id = location.state.data.questioner.id;
  //===============================================
  console.log(answer,"This is answer");
    const userData = useSelector((state) => state.userAuth.userData);
  const { user } = userData;
  const [alert, setAlert] = useState(false);
  //===============================================
  const userId = user ? user.id : "";
  //===============================================

  useEffect(() => {
    dispatch(answerFetch(id));
  }, []);

  //===============================================
  const success = useSelector((state) => state.answers.success);
  const handleShow = () => setAlert(true);
  const handleClose = () => {
    setAlert(false);
    dispatch(setSuccess(false));
  };
  useEffect(() => {
    if (success) {
      handleShow();
    }
  }, [success]);

  setTimeout(() => {
    handleClose(); // this will hide the alert after 3 seconds
  }, 3000); // 3000ms = 3s

  return (
    <div className="answer-div">
      <h4>Answers</h4>
      {alert && (
        <AlertMessage handleClose={handleClose} message="Answer added" />
      )}
      {loading && <Spinner variant="warning" animation="border" />}
      {answer &&
        answer.map((ans) => {
          return (
            <div className="answer">
              <Row>
                <Card justify="space-between">
                  <Stack direction={"row"} spacing={2}>
                    <Avatar src={ans.respondent.avatar} />
                    <Link to={`/${ans.respondent.username}`}>
                      <p>{ans.respondent.fullname}</p>
                    </Link>

                    <Typography
                      style={{ float: "right" }}
                      variant="body2"
                      color="text.dark"
                    >
                      <ReactTimeAgo date={ans.created_at} locale="en-US" />
                    </Typography>
                  </Stack>
                  <CardContent
                    style={{
                      backgroundColor: "(245, 240, 235)",
                      // marginTop: "1%",
                    }}
                  >
                    <Typography
                      style={{ whiteSpace: "pre-wrap" }}
                      variant="p"
                      color="text.dark"
                    >
                      {parse(ans.answer)}
                    </Typography>
                  </CardContent>
                  {/* <IconButton aria-label=""> */}
                  <div className="answer-controll">
                    <AnswerControll ans ={ans} />
                  </div>
                </Card>
              </Row>
            </div>
          );
        })}
      <AddAnswer />
    </div>
  );
}

export default Answers;
