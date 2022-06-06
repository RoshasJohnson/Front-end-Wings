import React, { useEffect, useState } from "react";
import "../answers/answer.css";
import { Link, useLocation } from "react-router-dom";
import Moment from "moment";
import AddAnswer from "./AddAnswer";
import NavigationIcon from "@mui/icons-material/Navigation";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Col, Row, Spinner } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { answerFetch } from "../../../state/reducers/answers/AnswerReudcer";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import ReactTimeAgo from 'react-time-ago'
//===============================================

function Answers() {
  const dispatch = useDispatch();
  const answer = useSelector((state) => state.answers.setAnswer);
  const loading = useSelector((state) => state.answers.loading);
  //===============================================
  console.log(answer);
  const Date = answer.created_at;
  const formatDate = Moment(Date).format("DD-MM-YYYY");
  const [vote, setVote] = useState(false);
  const location = useLocation();
  const id = location.state.data.id;
  //===============================================
  function voteSubmit() {
    setVote(!vote);
  }
  useEffect(() => {
    dispatch(answerFetch(id));
  }, []);
  return (
    <div className="answer-div">
      <h4>Answers</h4>

      {loading && <Spinner variant="warning" animation="border" />}
      {answer &&
        answer.map((ans) => {
          return (
            <div className="answer">
              <Row>
                <Card justify="space-between">
                  <Stack direction={"row"} spacing={2}>
                    <Avatar src={ans.respondent.avatar} />
                    <Link to="">
                      <p>{ans.respondent.fullname}</p>
                      
                    </Link>
                

                  <Typography
                    style={{ float: "right" }}
                    variant="body2"
                    color="text.dark"
                  >
          
                   <ReactTimeAgo date={ans.created_at} locale="en-US"/>
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
                      {ans.answer}
                    </Typography>
                  </CardContent>
                  {/* <IconButton aria-label=""> */}
                  <CardActions style={{ width: "fit-content" }}>
                    {vote ? (
                      <>
                        {" "}
                        (1)
                        <NavigationIcon
                          style={{
                            color: "red",
                            cursor: "pointer",
                            width: "fit-content",
                          }}
                          onClick={voteSubmit}
                        />
                        voted
                      </>
                    ) : (
                      <>
                        <NavigationIcon
                          style={{ color: "green", cursor: "pointer" }}
                          onClick={voteSubmit}
                        />
                        vote
                      </>
                    )}
                    <EditIcon style={{float:"right",color:"green"}}/>
                  </CardActions>
  
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
