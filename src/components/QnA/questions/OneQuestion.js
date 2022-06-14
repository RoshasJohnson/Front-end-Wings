import React from "react";
import "./eachQuesitonAndanswer.css";
import { Link, useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Moment from "moment";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import ReactTimeAgo from "react-time-ago";
import parse from "html-react-parser";
function OneQuestion() {
  const location = useLocation();
  // =====================================
  const {
    state: {
      data: {
        question,
        question_title,
        question_topic,
        attached_file,
        questioner,
        created_at,
      },
    },
  } = location;
  // =====================================

  const formatDate = Moment(created_at).format("DD-MM-YYYY");
  // =====================================
  return (
    <div className="one_qna">
      <Card style={{ padding: "10px" }}>
        <Stack direction={"row"} spacing={2}>
          <Avatar src={questioner.avatar} />
          <Link to={`/${questioner.username}`}>
            <p>{questioner.fullname}</p>
          </Link>
        </Stack>
        <Typography
          style={{ float: "right" }}
          variant="body2"
          color="text.dark"
        >
        </Typography>
        <h2>{question_title}</h2>
        <Typography style={{ whiteSpace: "pre-wrap", background: "#ffffff" }}>
          {parse(question)}
        </Typography>
        {attached_file ? (
          <CardMedia
            component="img"
            style={{ width: "100%", height: "100%" }}
            image={attached_file}
            alt="Paella dish"
          />
        ) : (
          ""
        )}

<Stack  style={{ display: "flex" }}>
          <Link
            to={`/questions/topic/${question_topic.topics}`}
            state={{ data: question_topic.topics, id: question_topic.id }}
          >
            <p
              style={{
                margin: "1%",
                color: "gray",
                width: "fit-content",
                
              }}
            >
              {question_topic.topics}
            </p>
          </Link>
          <p style={{color:"gray"}}><small>Asked :<ReactTimeAgo date={created_at} locale="en-US" /></small></p>
          </Stack>
      </Card>
    </div>
  );
}

export default OneQuestion;
