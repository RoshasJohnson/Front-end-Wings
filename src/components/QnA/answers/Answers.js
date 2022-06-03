import React, { useEffect, useState } from "react";
import "../answers/answer.css";
import { Link, useLocation } from "react-router-dom";
import Moment from 'moment';
import AddAnswer from "./AddAnswer";

import FormControlLabel from "@mui/material/FormControlLabel";
import { Col, Row } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { answerFetch } from "../../../state/reducers/answers/AnswerReudcer";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
function Answers() {
  const dispatch = useDispatch();
  const answer = useSelector((state) => state.answers.setAnswer);
  const date = answer.created_at
  const formatDate = Moment(date).format('DD-MM-YYYY')

  const location = useLocation();
  const id = location.state.data.id;
  useEffect(() => {
    dispatch(answerFetch(id));

  }, []);
  return (
    <div className="answer-div">
      <h4>Answers</h4>
       {answer && answer.map((ans) => {
        return (
          <div className="answer">
            <Row>
              <Card  justify="space-between">
                <Stack direction={"row"} spacing={2}>
                <Avatar src="/broken-image.jpg" />  
                <Link  to="">
                <p>{ans.respondent.first_name}</p>
                </Link>
                </Stack>
                <Typography style={{float:"right"}} variant="body2" color="text.dark">
                answerd  in :   {formatDate} 
                </Typography>
                <CardContent style={{ backgroundColor: "(245, 240, 235)" ,marginTop:"1%"}}>
                  <Typography  style={{ whiteSpace: "pre-wrap"}} variant="p" color="text.dark">
                    {ans.answer}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon style={{ color: "red" }} />
                  </IconButton>
                </CardActions>
                {/* <p>s</p> */}
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
